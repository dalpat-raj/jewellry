import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const More_Details = () => {
  return (
    <div className='my-6 flex justify-between items-center'>
      <div className='text-[15px]'>
        <span>Details: </span>
        <strong className='font-medium'>Bracelets</strong>
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <button className='underline text-[var(--bg--prod-details-btn)] cursor-pointer'>
            View More
          </button>
        </DrawerTrigger>
        
        <DrawerContent className="max-h-[80vh] px-4"> 
          <Tabs defaultValue="details" className="w-full ">
            <DrawerHeader className="text-left py-0 border-b-2 border-gray-200">
              <DrawerTitle className="hidden">Product Information</DrawerTitle>
                <TabsList className="w-1/4 max-sm:w-full m-auto text-sm"> 
                  <TabsTrigger value="details">Product Details</TabsTrigger>
                  <TabsTrigger value="info">More Info</TabsTrigger>
                </TabsList>
            </DrawerHeader>
                       
            <div className="overflow-y-auto ">
              <TabsContent value="details">
                <p>Materials: 100% Sterling Silver</p>
                <p>Dimensions: 7.5" length</p>
                <p>Care instructions: Avoid contact with water</p>
              </TabsContent>
              
              <TabsContent value="info">
                <p>Shipping: Free worldwide delivery</p>
                <p>Returns: 30-day guarantee</p>
                <p>Certification: Hallmarked 925</p>
              </TabsContent>
            </div>
          </Tabs>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default More_Details;