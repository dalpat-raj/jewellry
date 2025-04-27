import { motion } from "framer-motion";
import React from "react";

interface TabContentWrapperProps {
  children: React.ReactNode;
}

const TabContentWrapper: React.FC<TabContentWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default TabContentWrapper