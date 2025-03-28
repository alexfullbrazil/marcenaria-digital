import { cache } from 'react';

export interface Product {
  url: string;
  image: string;
  name: string;
  originalPrice: string;
  discountPrice: string;
}

// Function to fetch products with cache
export const getProducts = cache(async (): Promise<Product[]> => {
  try {
    // Fetch page content
    const response = await fetch('https://marcenariadigital.com/shop', { 
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products page');
    }
    
    const html = await response.text();
    
    // Extract products using regex based on the actual HTML structure
    // Modified to capture all possible products
    const productsRegex = /<div class="card h-100 product-card"[^>]*>[\s\S]*?<a href="([^"]+)"[^>]*>[\s\S]*?<img src="([^"]+)"[^>]*>[\s\S]*?<h5 class="card-title">([^<]+)<\/h5>[\s\S]*?(?:<span class="price-old">R\$([0-9,.]+)<\/span>[\s\S]*?<span class="price-new">R\$([0-9,.]+)<\/span>|<span class="price">R\$([0-9,.]+)<\/span>)/g;
    
    const products: Product[] = [];
    let match;
    
    while ((match = productsRegex.exec(html)) !== null) {
      // Check if it's a product with discount or single price
      if (match[4] && match[5]) {
        // Product with discount
        products.push({
          url: match[1],
          image: match[2],
          name: match[3].trim(),
          originalPrice: match[4].trim(),
          discountPrice: match[5].trim(),
        });
      } else if (match[6]) {
        // Product with single price
        const price = match[6].trim();
        products.push({
          url: match[1],
          image: match[2],
          name: match[3].trim(),
          originalPrice: price,
          discountPrice: price,
        });
      }
    }
    
    console.log(`Products found: ${products.length}`);
    
    // If there are still few products, try another approach
    if (products.length <= 12) {
      // Try to extract products from other pages
      try {
        const page2Response = await fetch('https://marcenariadigital.com/shop?page=2', { 
          next: { revalidate: 3600 }
        });
        
        if (page2Response.ok) {
          const html2 = await page2Response.text();
          let match2;
          
          while ((match2 = productsRegex.exec(html2)) !== null) {
            if (match2[4] && match2[5]) {
              products.push({
                url: match2[1],
                image: match2[2],
                name: match2[3].trim(),
                originalPrice: match2[4].trim(),
                discountPrice: match2[5].trim(),
              });
            } else if (match2[6]) {
              const price = match2[6].trim();
              products.push({
                url: match2[1],
                image: match2[2],
                name: match2[3].trim(),
                originalPrice: price,
                discountPrice: price,
              });
            }
          }
        }
      } catch (error) {
        console.error('Error fetching page 2:', error);
      }
    }
    
    console.log(`Total products after additional check: ${products.length}`);
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
});
