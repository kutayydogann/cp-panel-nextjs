const navigation = () => {
  return [
    {
      sectionTitle: 'Ana Sayfa'
    },
    {
      title: 'Ana Sayfa',
      icon: 'tabler:smart-home',
      path: '/panel/home'
    },
    {
      sectionTitle: 'Gönderi'
    },
    {
      title: 'Gönderi Oluştur',
      icon: 'tabler:plus',
      path: '/panel/'
    },
    {
      title: 'Tekliflerim',
      icon: 'tabler:clipboard-text',
      path: '/panel/myOffers'
    },
    {
      title: 'Gönderilerim',
      icon: 'tabler:package',
      path: '/panel/myShipments'
    },
    {
      title: 'Toplama Taleplerim',
      icon: 'tabler:truck',
      path: '/panel/tt'
    },
    {
      title: 'Taleplerim',
      icon: 'tabler:message',
      path: '/panel/t'
    },
    {
      title: 'Belgelerim',
      icon: 'tabler:file-invoice',
      children: [
        {
          title: "Gönderi Belgeleri",
          path: '/panel/s'
        },
        {
          title: "Faturalarım",
          path: '/panel/f'
        },
      ]
    },
    {
      title: 'Fiyat Hesaplama',
      icon: 'tabler:calculator',
      path: '/panel/c'
    },
    {
      sectionTitle: 'Ayarlar'
    },
    {
      title: 'Hesap Ayarları',
      icon: 'tabler:settings',
      children: [
        {
          title: "Hesap Bilgilerim",
          path: '/panel/accountSettings'
        },
        {
          title: "Şifre Değiştirme",
          path: '/panel/changePassword'
        },
        {
          title: "Adreslerim",
          path: '/panel/addresses'
        },
      ]
    },
  ]
}

export default navigation
