import ProductSidebar from "@/Components/UI/Products/ProductSidebar";


const ProductPageLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="grid grid-cols-12">
            <ProductSidebar/>
            <div className="cal-col-span-10">
            {children}
            </div>
            
        </div>
    );
};

export default ProductPageLayout;