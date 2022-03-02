import React from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import SelectComponentProps from '../../types/select-component-props';

type Country = {
  value: string,
  title: string,
};

const countries: Array<Country> = [
  { value: 'AF', title: 'Afghanistan' },
  { value: 'AX', title: 'Aland Islands' },
  { value: 'AL', title: 'Albania' },
  { value: 'DZ', title: 'Algeria' },
  { value: 'AS', title: 'American Samoa' },
  { value: 'AD', title: 'Andorra' },
  { value: 'AO', title: 'Angola' },
  { value: 'AI', title: 'Anguilla' },
  { value: 'AQ', title: 'Antarctica' },
  { value: 'AG', title: 'Antigua and Barbuda' },
  { value: 'AR', title: 'Argentina' },
  { value: 'AM', title: 'Armenia' },
  { value: 'AW', title: 'Aruba' },
  { value: 'AU', title: 'Australia' },
  { value: 'AT', title: 'Austria' },
  { value: 'AZ', title: 'Azerbaijan' },
  { value: 'BS', title: 'Bahamas' },
  { value: 'BH', title: 'Bahrain' },
  { value: 'BD', title: 'Bangladesh' },
  { value: 'BB', title: 'Barbados' },
  { value: 'BY', title: 'Belarus' },
  { value: 'BE', title: 'Belgium' },
  { value: 'BZ', title: 'Belize' },
  { value: 'BJ', title: 'Benin' },
  { value: 'BM', title: 'Bermuda' },
  { value: 'BT', title: 'Bhutan' },
  { value: 'BO', title: 'Plurinational State of Bolivia' },
  { value: 'BQ', title: 'Bonaire, Sint Eustatius and Sa' },
  { value: 'BA', title: 'Bosnia and Herzegovina' },
  { value: 'BW', title: 'Botswana' },
  { value: 'BR', title: 'Brazil' },
  { value: 'IO', title: 'British Indian Ocean Territory' },
  { value: 'BN', title: 'Brunei Darussalam' },
  { value: 'BG', title: 'Bulgaria' },
  { value: 'BF', title: 'Burkina Faso' },
  { value: 'BI', title: 'Burundi' },
  { value: 'KH', title: 'Cambodia' },
  { value: 'CM', title: 'Cameroon' },
  { value: 'CA', title: 'Canada' },
  { value: 'CV', title: 'Cape Verde' },
  { value: 'KY', title: 'Cayman Islands' },
  { value: 'CF', title: 'Central African Republic' },
  { value: 'TD', title: 'Chad' },
  { value: 'CL', title: 'Chile' },
  { value: 'CN', title: 'China' },
  { value: 'CX', title: 'Christmas Island (Australia)' },
  { value: 'CC', title: 'Cocos (Keeling) Islands' },
  { value: 'CO', title: 'Colombia' },
  { value: 'KM', title: 'Comoros' },
  { value: 'CK', title: 'Cook Islands' },
  { value: 'CR', title: 'Costa Rica' },
  { value: 'CI', title: 'Cote d&apos;Ivoire' },
  { value: 'HR', title: 'Croatia' },
  { value: 'CU', title: 'Cuba' },
  { value: 'CW', title: 'Curacao' },
  { value: 'CY', title: 'Cyprus' },
  { value: 'CZ', title: 'Czech Republic' },
  { value: 'DK', title: 'Denmark' },
  { value: 'DJ', title: 'Djibouti' },
  { value: 'DM', title: 'Dominica' },
  { value: 'DO', title: 'Dominican Republic' },
  { value: 'EC', title: 'Ecuador' },
  { value: 'EG', title: 'Egypt' },
  { value: 'SV', title: 'El Salvador' },
  { value: 'GQ', title: 'Equatorial Guinea' },
  { value: 'ER', title: 'Eritrea' },
  { value: 'EE', title: 'Estonia' },
  { value: 'SZ', title: 'Eswatini' },
  { value: 'ET', title: 'Ethiopia' },
  { value: 'FK', title: 'Falkland Islands (Malvinas)' },
  { value: 'FO', title: 'Faroe Islands' },
  { value: 'FJ', title: 'Fiji' },
  { value: 'FI', title: 'Finland' },
  { value: 'FR', title: 'France' },
  { value: 'GF', title: 'French Guiana (Guyane)' },
  { value: 'PF', title: 'French Polynesia' },
  { value: 'TF', title: 'French Southern Territories' },
  { value: 'GA', title: 'Gabon' },
  { value: 'GM', title: 'Gambia' },
  { value: 'GE', title: 'Georgia' },
  { value: 'DE', title: 'Germany' },
  { value: 'GH', title: 'Ghana' },
  { value: 'GI', title: 'Gibraltar' },
  { value: 'GR', title: 'Greece' },
  { value: 'GL', title: 'Greenland' },
  { value: 'GD', title: 'Grenada' },
  { value: 'GP', title: 'Guadeloupe' },
  { value: 'GU', title: 'Guam' },
  { value: 'GT', title: 'Guatemala' },
  { value: 'GN', title: 'Guinea' },
  { value: 'GW', title: 'Guinea-Bissau' },
  { value: 'GY', title: 'Guyana, Co-operative Republic of' },
  { value: 'HT', title: 'Haiti' },
  { value: 'VA', title: 'Holy See (Vatican City State)' },
  { value: 'HN', title: 'Honduras' },
  { value: 'HK', title: 'Hong Kong' },
  { value: 'HU', title: 'Hungary' },
  { value: 'IS', title: 'Iceland' },
  { value: 'IN', title: 'India' },
  { value: 'ID', title: 'Indonesia' },
  { value: 'IR', title: 'Iran, Islamic Republic of' },
  { value: 'IQ', title: 'Iraq' },
  { value: 'IE', title: 'Ireland, Republic of' },
  { value: 'IL', title: 'Israel' },
  { value: 'IT', title: 'Italy' },
  { value: 'JM', title: 'Jamaica' },
  { value: 'JP', title: 'Japan' },
  { value: 'JO', title: 'Jordan' },
  { value: 'KZ', title: 'Kazakhstan' },
  { value: 'KE', title: 'Kenya' },
  { value: 'KI', title: 'Kiribati' },
  { value: 'KR', title: 'Korea, Republic of (South Korea)' },
  { value: 'XK', title: 'Kosovo' },
  { value: 'KW', title: 'Kuwait' },
  { value: 'KG', title: 'Kyrgyzstan' },
  { value: 'LV', title: 'Latvia' },
  { value: 'LB', title: 'Lebanon' },
  { value: 'LS', title: 'Lesotho' },
  { value: 'LR', title: 'Liberia' },
  { value: 'LY', title: 'Libya' },
  { value: 'LI', title: 'Liechtenstein' },
  { value: 'LT', title: 'Lithuania' },
  { value: 'LU', title: 'Luxembourg' },
  { value: 'MO', title: 'Macao' },
  { value: 'MG', title: 'Madagascar' },
  { value: 'MW', title: 'Malawi' },
  { value: 'MY', title: 'Malaysia' },
  { value: 'MV', title: 'Maldives' },
  { value: 'ML', title: 'Mali' },
  { value: 'MT', title: 'Malta' },
  { value: 'MH', title: 'Marshall Islands' },
  { value: 'MQ', title: 'Martinique' },
  { value: 'MR', title: 'Mauritania' },
  { value: 'MU', title: 'Mauritius' },
  { value: 'YT', title: 'Mayotte' },
  { value: 'MX', title: 'Mexico' },
  { value: 'MC', title: 'Monaco' },
  { value: 'MN', title: 'Mongolia' },
  { value: 'ME', title: 'Montenegro' },
  { value: 'MS', title: 'Montserrat' },
  { value: 'MA', title: 'Morocco' },
  { value: 'MZ', title: 'Mozambique' },
  { value: 'MM', title: 'Myanmar' },
  { value: 'NA', title: 'Namibia' },
  { value: 'NR', title: 'Nauru' },
  { value: 'NP', title: 'Nepal' },
  { value: 'NL', title: 'Netherlands' },
  { value: 'NC', title: 'New Caledonia' },
  { value: 'NZ', title: 'New' },
  { value: 'NI', title: 'Nicaragua' },
  { value: 'NE', title: 'Niger' },
  { value: 'NG', title: 'Nigeria' },
  { value: 'NU', title: 'Niue' },
  { value: 'NF', title: 'Norfolk Island' },
  { value: 'MK', title: 'North Macedonia' },
  { value: 'NO', title: 'Norway' },
  { value: 'OM', title: 'Oman' },
  { value: 'PK', title: 'Pakistan' },
  { value: 'PW', title: 'Palau' },
  { value: 'PS', title: 'Palestine' },
  { value: 'PA', title: 'Panama' },
  { value: 'PY', title: 'Paraguay' },
  { value: 'PE', title: 'Peru' },
  { value: 'PH', title: 'Philippines' },
  { value: 'PN', title: 'Pitcairn' },
  { value: 'PL', title: 'Poland' },
  { value: 'PT', title: 'Portugal' },
  { value: 'PR', title: 'Puerto Rico' },
  { value: 'QA', title: 'Qatar' },
  { value: 'RE', title: 'Reunion' },
  { value: 'RO', title: 'Romania' },
  { value: 'RU', title: 'Russia' },
  { value: 'RW', title: 'Rwanda' },
  { value: 'WS', title: 'Samoa' },
  { value: 'SM', title: 'San Marino' },
  { value: 'SA', title: 'Saudi Arabia' },
  { value: 'SN', title: 'Senegal' },
  { value: 'RS', title: 'Serbia' },
  { value: 'SC', title: 'Seychelles' },
  { value: 'SL', title: 'Sierra Leone' },
  { value: 'SG', title: 'Singapore' },
  { value: 'SK', title: 'Slovakia' },
  { value: 'SI', title: 'Slovenia' },
  { value: 'SO', title: 'Somalia' },
  { value: 'ZA', title: 'South Africa' },
  { value: 'SS', title: 'South Sudan' },
  { value: 'ES', title: 'Spain' },
  { value: 'LK', title: 'Sri Lanka' },
  { value: 'SD', title: 'Sudan' },
  { value: 'SR', title: 'Suriname' },
  { value: 'SJ', title: 'Svalbard and Jan Mayen' },
  { value: 'SE', title: 'Sweden' },
  { value: 'CH', title: 'Switzerland' },
  { value: 'SY', title: 'Syrian Arab Republic' },
  { value: 'TW', title: 'Taiwan' },
  { value: 'TJ', title: 'Tajikistan' },
  { value: 'TZ', title: 'Tanzania, United Republic of' },
  { value: 'TH', title: 'Thailand' },
  { value: 'TL', title: 'Timor-Leste' },
  { value: 'TG', title: 'Togo' },
  { value: 'TK', title: 'Tokelau' },
  { value: 'TO', title: 'Tonga' },
  { value: 'TT', title: 'Trinidad and Tobago' },
  { value: 'TN', title: 'Tunisia' },
  { value: 'TR', title: 'Turkey' },
  { value: 'TM', title: 'Turkmenistan' },
  { value: 'TC', title: 'Turks and Caicos Islands' },
  { value: 'TV', title: 'Tuvalu' },
  { value: 'UG', title: 'Uganda' },
  { value: 'GB', title: 'UK' },
  { value: 'UA', title: 'Ukraine' },
  { value: 'AE', title: 'United Arab Emirates' },
  { value: 'US', title: 'United States' },
  { value: 'UM', title: 'United States Minor Outlying Islands' },
  { value: 'UY', title: 'Uruguay' },
  { value: 'UZ', title: 'Uzbekistan' },
  { value: 'VU', title: 'Vanuatu' },
  { value: 'VE', title: 'Venezuela, Bolivarian Republic of' },
  { value: 'VN', title: 'Vietnam' },
  { value: 'VG', title: 'Virgin Islands, British' },
  { value: 'VI', title: 'Virgin Islands, U.S.' },
  { value: 'WF', title: 'Wallis and Futuna' },
  { value: 'EH', title: 'Western Sahara' },
  { value: 'YE', title: 'Yemen' },
  { value: 'ZM', title: 'Zambia' },
  { value: 'ZW', title: 'Zimbabwe' },
];

const CountrySelect: React.FC<SelectComponentProps> = ({ ...props }) => (
  <FormControl fullWidth>
    <InputLabel id="country">Select Country</InputLabel>
    <Select
      labelId="country"
      label="Select Country"
      MenuProps={{ sx: { height: 300 } }}
      {...props}
    >
      {countries.map(({ value, title }) => (
        <MenuItem
          key={value}
          value={value}
        >
          {title}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default CountrySelect;
