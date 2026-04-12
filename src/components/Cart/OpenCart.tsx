import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

export function OpenCartButton({
  className,
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <Button
      variant="outline"
      className="bg-transparent! outline-none! border-none! hover:bg-transparent! hover:border-none! shadow-none!"
      {...rest}
    >
      <ShoppingCart className='size-5' />
      <span className='text-lg'>Cart</span>

      {quantity ? (
        <>
          <span>•</span>
          <span>{quantity}</span>
        </>
      ) : null}
    </Button>
  )
}
