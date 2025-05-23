export const deleteImageFromServer = async (url: string) => {
    
    try {
        const filename = url.split("/uploads/")[1];
        
      if (!filename) return;
  
      const res = await fetch(`/api/delete?filename=${filename}`, {
        method: "DELETE",
    });

  
      if (!res.ok) {
        throw new Error("Failed to delete image from server");
      }
    } catch (error) {
      console.error("Delete image error:", error);
    }
  };
  