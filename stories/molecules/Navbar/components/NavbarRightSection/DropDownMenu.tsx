// import { FC } from 'react'
// import { INavbarRightSectionElement } from './NavbarRightSection.types'
// import * as Dropdown from '@radix-ui/react-dropdown-menu'
// import chevronDownIcon from '../../../../assets/icons/ChevronDown.svg'
// import Image from 'next/image'

// export const DropDownMenu: FC<INavbarRightSectionElement> = ({
//   svg,
//   alt,
//   label,
//   className,
//   iconClassName,
//   labelClassName,
//   dropdownFields,
// }) => {
//   return (
//     <Dropdown.Root>
//       <Dropdown.Trigger asChild>
//         <Image src={chevronDownIcon} alt="" className="w-[25px]" />
//       </Dropdown.Trigger>
//       <Dropdown.Content className="w-48">
//         {dropdownFields?.map((field) => (
//           <Dropdown.Item key={field}>
//             <button className={className}>
//               <span className={labelClassName}>{field}</span>
//             </button>
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Content>
//     </Dropdown.Root>
//   )
// }
