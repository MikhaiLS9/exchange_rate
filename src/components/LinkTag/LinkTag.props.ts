export interface ILinkTag {
  href: string;
  children: string;
  appearance : 'button' | 'buttonXl' | 'ghost' | 'ghostXl'
  isActive? : boolean
}
