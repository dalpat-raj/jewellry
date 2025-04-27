
const ReviewStep = () => {
    
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Review Product</h2>
      
      {/* Basic Information */}
      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-2">Basic Information</h3>
        <p><strong>Title:</strong> {}</p>
        <p><strong>Description:</strong> {}</p>
        <p><strong>Slug:</strong> {}</p>
      </div>

      {/* Pricing */}
      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-2">Pricing</h3>
        <p><strong>Base Price:</strong> ₹{}</p>
        <p><strong>Selling Price:</strong> ₹{}</p>
       
          <p><strong>Discount:</strong> {}{}</p>
        
      </div>

      {/* Variants */}
      
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Variants</h3>
          
            <div className="mb-2">
              <p><strong>Color:</strong> {}</p>
              <p><strong>SKU:</strong> {}</p>
              <p><strong>Stock:</strong> {}</p>
            </div>
          
        </div>
      

      {/* Shipping */}
      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-2">Shipping</h3>
       
      </div>
    </div>
  );
};

export default ReviewStep;