'use client'
import Link from 'next/link'

import type { Header, Media } from 'src/payload-types'

import { Mail, MapPin, PhoneCall, SearchIcon, User, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Suspense, useState } from 'react'
import { Cart } from '../Cart'
import { OpenCartButton } from '../Cart/OpenCart'
import { Input } from '../ui/input'
import { MobileMenu } from './MobileMenu'

type Props = {
  header: Header
}


const TopBar = ({ phone, email, address }: { phone: string, email: string, address: string }) => {
  return (
    <div className='bg-secondary-color w-full'>
      <div className='container text-white p-2 flex items-center gap-5'>
        {
          phone && (
            <p className='text-sm flex items-center gap-2'>
              <PhoneCall className='size-4' />
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          )
        }
        {
          email && (
            <p className='text-sm flex items-center gap-2'>
              <Mail className='size-4' />
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          )
        }
        {
          address && (
            <p className='text-sm flex items-center gap-2'>
              <MapPin className='size-4' />
              <a href={`https://maps.app.goo.gl/1234567890`} target='_blank' rel='noopener noreferrer'>{address}</a>
            </p>
          )
        }
      </div>
    </div>
  )
}


const SearchField = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <div className='flex items-center gap-2'>
      <div className='relative'>
        <form className='relative'>
          <Input
            placeholder='Search'
            className={`${search ? 'md:w-[250px]' : 'md:w-[300px]'} py-5! pl-3! rounded-3xl! z-20! relative!`}
            type='text'
            name='search'
            id='search'
            autoComplete='off'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className='size-4 absolute right-3 top-1/2 -translate-y-1/2' />
        </form>
      </div>
      {
        search && (
          <div>
            <X className='size-6 text-black cursor-pointer relative z-20!' onClick={() => setSearch('')} />
          </div>
        )
      }
      {
        search && (
          <div className='absolute inset-0 bg-white/50 z-10 h-dvh'></div>
        )
      }
    </div>
  )
}

const Logo = ({ logoUrl, alt, width, height }: { logoUrl: string, alt: string, width: number, height: number }) => {
  return (
    <Link href="/">
      <Image src={logoUrl} alt={alt} width={width} height={height} className='mix-blend-multiply' />
    </Link>
  )
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname();
  const showTopBar = header.showTopBar || false;
  const { phone, email, address } = header.topBar || { phone: '', email: '', address: '' };
  const logo = header.logo as Media | null;
  const logoUrl = logo?.url || '';
  const alt = logo?.alt || '';
  const width = logo?.width;
  const height = logo?.height;
  return (
    <>
      {
        showTopBar && (
          <TopBar phone={phone || ''} email={email || ''} address={address || ''} />
        )
      }
      <nav className='border-b border-b-secondary-color/10 container py-4 flex items-center justify-between gap-10 sticky top-0 z-50 bg-primary-color'>
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        {/* Logo */}
        <div>
          {
            logoUrl ? (
              <Logo logoUrl={logoUrl} alt={alt} width={width || 100} height={height || 100} />
            ) : (
              <Link href="/">
                <h2 className="font-display text-5xl leading-[100%]">Decorva</h2>
              </Link>
            )
          }
        </div>
        <div className='flex items-center gap-4'>
          <SearchField />
          <Link href={'/login'} className='flex items-center gap-2'>
            <User className='size-5' />
            <span className="block text-lg font-medium">Account</span>
          </Link>
          <Suspense fallback={<OpenCartButton />}>
            <Cart />
          </Suspense>
        </div>
      </nav>
    </>
  )
}
