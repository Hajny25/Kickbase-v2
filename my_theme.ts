import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "200 200 200",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #c8bc3c 
		"--color-primary-50": "247 245 226", // #f7f5e2
		"--color-primary-100": "244 242 216", // #f4f2d8
		"--color-primary-200": "241 238 206", // #f1eece
		"--color-primary-300": "233 228 177", // #e9e4b1
		"--color-primary-400": "217 208 119", // #d9d077
		"--color-primary-500": "200 188 60", // #c8bc3c
		"--color-primary-600": "180 169 54", // #b4a936
		"--color-primary-700": "150 141 45", // #968d2d
		"--color-primary-800": "120 113 36", // #787124
		"--color-primary-900": "98 92 29", // #625c1d
		// secondary | #0085c7 
		"--color-secondary-50": "217 237 247", // #d9edf7
		"--color-secondary-100": "204 231 244", // #cce7f4
		"--color-secondary-200": "191 225 241", // #bfe1f1
		"--color-secondary-300": "153 206 233", // #99cee9
		"--color-secondary-400": "77 170 216", // #4daad8
		"--color-secondary-500": "0 133 199", // #0085c7
		"--color-secondary-600": "0 120 179", // #0078b3
		"--color-secondary-700": "0 100 149", // #006495
		"--color-secondary-800": "0 80 119", // #005077
		"--color-secondary-900": "0 65 98", // #004162
		// tertiary | #70a3e6 
		"--color-tertiary-50": "234 241 251", // #eaf1fb
		"--color-tertiary-100": "226 237 250", // #e2edfa
		"--color-tertiary-200": "219 232 249", // #dbe8f9
		"--color-tertiary-300": "198 218 245", // #c6daf5
		"--color-tertiary-400": "155 191 238", // #9bbfee
		"--color-tertiary-500": "112 163 230", // #70a3e6
		"--color-tertiary-600": "101 147 207", // #6593cf
		"--color-tertiary-700": "84 122 173", // #547aad
		"--color-tertiary-800": "67 98 138", // #43628a
		"--color-tertiary-900": "55 80 113", // #375071
		// success | #89d855 
		"--color-success-50": "237 249 230", // #edf9e6
		"--color-success-100": "231 247 221", // #e7f7dd
		"--color-success-200": "226 245 213", // #e2f5d5
		"--color-success-300": "208 239 187", // #d0efbb
		"--color-success-400": "172 228 136", // #ace488
		"--color-success-500": "137 216 85", // #89d855
		"--color-success-600": "123 194 77", // #7bc24d
		"--color-success-700": "103 162 64", // #67a240
		"--color-success-800": "82 130 51", // #528233
		"--color-success-900": "67 106 42", // #436a2a
		// warning | #e6b35b 
		"--color-warning-50": "251 244 230", // #fbf4e6
		"--color-warning-100": "250 240 222", // #faf0de
		"--color-warning-200": "249 236 214", // #f9ecd6
		"--color-warning-300": "245 225 189", // #f5e1bd
		"--color-warning-400": "238 202 140", // #eeca8c
		"--color-warning-500": "230 179 91", // #e6b35b
		"--color-warning-600": "207 161 82", // #cfa152
		"--color-warning-700": "173 134 68", // #ad8644
		"--color-warning-800": "138 107 55", // #8a6b37
		"--color-warning-900": "113 88 45", // #71582d
		// error | #ca4e4e 
		"--color-error-50": "247 228 228", // #f7e4e4
		"--color-error-100": "244 220 220", // #f4dcdc
		"--color-error-200": "242 211 211", // #f2d3d3
		"--color-error-300": "234 184 184", // #eab8b8
		"--color-error-400": "218 131 131", // #da8383
		"--color-error-500": "202 78 78", // #ca4e4e
		"--color-error-600": "182 70 70", // #b64646
		"--color-error-700": "152 59 59", // #983b3b
		"--color-error-800": "121 47 47", // #792f2f
		"--color-error-900": "99 38 38", // #632626
		// surface | #2a2a2a 
		"--color-surface-50": "223 223 223", // #dfdfdf
		"--color-surface-100": "212 212 212", // #d4d4d4
		"--color-surface-200": "202 202 202", // #cacaca
		"--color-surface-300": "170 170 170", // #aaaaaa
		"--color-surface-400": "106 106 106", // #6a6a6a
		"--color-surface-500": "42 42 42", // #2a2a2a
		"--color-surface-600": "38 38 38", // #262626
		"--color-surface-700": "32 32 32", // #202020
		"--color-surface-800": "25 25 25", // #191919
		"--color-surface-900": "21 21 21", // #151515
		
	}
}