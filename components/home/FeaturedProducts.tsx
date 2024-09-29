import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../globals/EmptyList";
import SectionTitle from "../globals/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const featuredProducts = await fetchFeaturedProducts();

  if (featuredProducts.length < 1) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={featuredProducts} />
    </section>
  );
}

export default FeaturedProducts;
