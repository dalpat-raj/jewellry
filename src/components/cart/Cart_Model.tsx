import { Eye, Heart, ShoppingBag, Zap } from 'lucide-react'
import React, { useState } from 'react';
import {motion} from "framer-motion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Cart_Items from './Cart_Items';
import Wishlist_Model from '@/components/account/wishlist/Wishlist_Model';
import TabContentWrapper from '@/components/ui/TabContentWrapper';
import Best_seller_Model from '@/components/best-seller/Best_seller_Model';
import Visited_Model from '../account/visited/Visited';

const CartModel = () => {
  const [activeTab, setActiveTab] = useState<string>('Shopping Cart');
  
  const handleTabChange = (value: string) => {

    let title = "Shopping Cart";
    if (value === "best-seller") title = "Best Seller";
    else if (value === "wishlist") title = "Your Wishlist";
    else if (value === "visited") title = "Visited";
    else if (value === "carts") title = "Shopping Cart";

    setActiveTab(title);
  };

  return (
    <div className='pt-6 px-4'>
      <motion.h2 
        className='text-[16px] font-normal uppercase text-[var(--h-text-color)]'
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.4}}
      >
        {activeTab}
      </motion.h2>
      <Tabs defaultValue="carts" className="full mt-4" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-4 border border-gray-300 mb-2 z-50">
          <TabsTrigger className='border-r border-gray-300' value="best-seller"><Zap size={24}/></TabsTrigger>
          <TabsTrigger className='border-r border-gray-300' value="wishlist"><Heart/></TabsTrigger>
          <TabsTrigger className='border-r border-gray-300' value="visited"><Eye size={24}/></TabsTrigger>
          <TabsTrigger value="carts"><ShoppingBag/></TabsTrigger>
        </TabsList>
        <TabsContent value="best-seller">
          <TabContentWrapper>
            <Best_seller_Model/>
          </TabContentWrapper>
        </TabsContent>
        <TabsContent value="wishlist">
          <TabContentWrapper>
            <Wishlist_Model/>
          </TabContentWrapper>
        </TabsContent>
        <TabsContent value="visited">
          <TabContentWrapper>
            <Visited_Model/>
          </TabContentWrapper>
        </TabsContent>
        <TabsContent value="carts">
          <TabContentWrapper>
            <Cart_Items/>
          </TabContentWrapper>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CartModel