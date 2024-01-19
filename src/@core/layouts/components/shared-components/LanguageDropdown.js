// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Import
import { useTranslation } from 'react-i18next'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

const LanguageDropdown = ({ settings, saveSettings }) => {
  // ** Hook
  const { i18n } = useTranslation()

  const handleLangItemClick = lang => {
    i18n.changeLanguage(lang)
  }

  return (
    <OptionsMenu
      iconButtonProps={{ color: 'inherit' }}
      icon={<Icon fontSize='1.5rem' icon='tabler:language' />}
      menuProps={{ sx: { '& .MuiMenu-paper': { mt: 4.5, minWidth: 50 } } }}
      options={[
        {
          text: 'TR',
          menuItemProps: {
            sx: { py: 2, textAlign: 'center', display: 'block' },
            selected: i18n.language === 'tr',
            onClick: () => {
              handleLangItemClick('tr')
              saveSettings({ ...settings, direction: 'ltr' })
            }
          }
        },
        {
          text: 'ENG',
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'en',
            onClick: () => {
              handleLangItemClick('en')
              saveSettings({ ...settings, direction: 'ltr' })
            }
          }
        },
      ]}
    />
  )
}

export default LanguageDropdown
