import { Button } from '@/components/ui/button'
import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import React from 'react'

const LensPackageDrawerContent = ({selectedId}: any) => {
  return (
    <DrawerContent>
      <DrawerHeader className="text-left">
        <DrawerTitle>Select a suitable Package?</DrawerTitle>
      </DrawerHeader>
      {/* <LensTypeForm/> */}
      {selectedId}
      <DrawerFooter className="pt-2">
        <DrawerClose asChild>
          <Button  variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  )
}

export default LensPackageDrawerContent