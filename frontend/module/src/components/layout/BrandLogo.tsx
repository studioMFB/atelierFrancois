import lilWudLogo from '@/assets/brand/lil-wud-logo.svg'

interface BrandLogoProps {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <div>
      <img alt="Lil' Wud logo" className={`brand-logo ${className}`.trim()} src={lilWudLogo} />
      <p className="eyebrow">Handmade outdoor furniture for children</p>
    </div>
  )
}
