const navigation = () => {
  return [
    {
      sectionTitle: 'Ana Sayfa'
    },
    {
      title: 'Ana Sayfa',
      icon: 'tabler:smart-home',
      path: '/panel/homePage'
    },
    {
      sectionTitle: 'Gönderi'
    },
    {
      title: 'Gönderi Oluştur',
      icon: 'tabler:plus',
      path: '/panel/createShipment'
    },
    {
      title: 'Tekliflerim',
      icon: 'tabler:clipboard-text',
      path: '/panel/manualQuotes'
    },
    {
      title: 'Gönderilerim',
      icon: 'tabler:package',
      path: '/panel/myShipments'
    },
    {
      title: 'Toplama Taleplerim',
      icon: 'tabler:truck',
      path: '/panel/pickupRequests'
    },
    {
      title: 'Taleplerim',
      icon: 'tabler:message',
      path: '/panel/requests'
    },
    {
      title: 'Belgelerim',
      icon: 'tabler:file-invoice',
      children: [
        {
          title: "Gönderi Belgeleri",
          path: '/panel/documents/shipment'
        },
        {
          title: "Faturalarım",
          path: '/panel/documents/invoices'
        },
      ]
    },
    {
      title: 'Fiyat Hesaplama',
      icon: 'tabler:calculator',
      path: '/panel/priceCalculation'
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
          path: '/panel/settings/account'
        },
        {
          title: "Şifre Değiştirme",
          path: '/panel/settings/changePassword'
        },
        {
          title: "Adreslerim",
          path: '/panel/settings/addresses'
        },
      ]
    },
  ]
}

export default navigation
