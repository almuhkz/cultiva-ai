'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import Link  from 'next/link';

export function NdviButton() {

  return (
    <Link href={'https://cultiva-ai.users.earthengine.app/view/ndvi'} target='_blank'>
      <Button
        type="button"
        className="text-sm font-medium bg-inherit-500 hover:bg-green-700 text-inherit py-2 px-4 rounded-full text-center">
        Карта для просмотра вегетационного индекса
      </Button>
      </Link>
  )

}
