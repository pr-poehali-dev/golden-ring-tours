import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ToursSectionProps {
  scrollToSection: (id: string) => void;
  isBookingOpen: boolean;
  setIsBookingOpen: (value: boolean) => void;
}

export default function ToursSection({ scrollToSection, isBookingOpen, setIsBookingOpen }: ToursSectionProps) {
  const [activeRoute, setActiveRoute] = useState(0);

  const tours = [
    {
      title: 'Индивидуальный VIP тур',
      description: 'Персональный водитель на автомобиле премиум-класса',
      price: 'от 45 000 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    },
    {
      title: 'Гастрономический тур',
      description: 'С шеф-поваром: традиционная кухня и авторские блюда',
      price: 'от 55 000 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      title: 'Фототур для профессионалов',
      description: 'Лучшие локации и рассветы с профессиональным фотографом',
      price: 'от 40 000 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&q=80',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    },
    {
      title: 'Духовное путешествие',
      description: 'Монастыри и храмы с духовным наставником',
      price: 'от 38 000 ₽',
      duration: '3-7 дней',
      icon: 'Church',
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
      features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места']
    }
  ];

  const routes = [
    {
      name: 'Классический маршрут',
      cities: ['Сергиев Посад', 'Переславль-Залесский', 'Ростов Великий', 'Ярославль', 'Кострома', 'Иваново', 'Суздаль', 'Владимир'],
      duration: '7 дней',
      highlights: 'Все главные города Золотого кольца'
    },
    {
      name: 'Экспресс-маршрут',
      cities: ['Сергиев Посад', 'Суздаль', 'Владимир'],
      duration: '3 дня',
      highlights: 'Самые значимые достопримечательности'
    },
    {
      name: 'Расширенный маршрут',
      cities: ['Москва', 'Сергиев Посад', 'Переславль', 'Ростов', 'Ярославль', 'Кострома', 'Плёс', 'Иваново', 'Суздаль', 'Владимир', 'Боголюбово'],
      duration: '10 дней',
      highlights: 'Полное погружение с дополнительными городами'
    }
  ];

  const gallery = [
    { 
      title: 'Суздальский кремль', 
      category: 'Архитектура',
      image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&q=80'
    },
    { 
      title: 'Церковь Покрова на Нерли', 
      category: 'Храмы',
      image: 'https://images.unsplash.com/photo-1581263477258-beb6efad31a9?w=800&q=80'
    },
    { 
      title: 'Ярославль, набережная', 
      category: 'Города',
      image: 'https://images.unsplash.com/photo-1564181091-1f18b0b3e5ad?w=800&q=80'
    },
    { 
      title: 'Троице-Сергиева Лавра', 
      category: 'Монастыри',
      image: 'https://images.unsplash.com/photo-1580670931013-bb0506a9e08b?w=800&q=80'
    },
    { 
      title: 'Владимирские соборы', 
      category: 'Архитектура',
      image: 'https://images.unsplash.com/photo-1597250699910-6eef50da52f5?w=800&q=80'
    },
    { 
      title: 'Ростовский кремль', 
      category: 'Памятники',
      image: 'https://images.unsplash.com/photo-1589655524737-8c951f52d3c8?w=800&q=80'
    }
  ];

  return (
    <>
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Car', title: 'Премиум авто', desc: 'Mercedes, BMW, Audi' },
              { icon: 'User', title: 'Личный гид', desc: 'Эксперт-историк' },
              { icon: 'Hotel', title: 'Отели 5★', desc: 'Лучшие гостиницы' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Полная страховка' }
            ].map((feature, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-2xl mb-4">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-24 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Sparkles" size={18} className="text-[#D4AF37]" />
              <span className="text-sm font-semibold text-[#D4AF37]">Эксклюзивные предложения</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Наши туры</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Каждый тур разработан индивидуально с учётом ваших интересов и пожеланий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Icon name={tour.icon} className="text-[#D4AF37]" size={24} />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-playfair text-[#1A1F2C]">{tour.title}</CardTitle>
                  <CardDescription className="text-gray-600">{tour.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {tour.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon name="Check" size={16} className="text-[#D4AF37] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Цена</div>
                      <div className="text-2xl font-bold text-[#D4AF37] font-playfair">{tour.price}</div>
                    </div>
                    <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white">
                          Забронировать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-playfair">Забронировать тур</DialogTitle>
                          <DialogDescription>
                            Оставьте заявку, и мы свяжемся с вами в течение часа
                          </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Иван Иванов" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Телефон</label>
                            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="+7 (999) 123-45-67" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="email@example.com" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Комментарий</label>
                            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] min-h-[100px]" placeholder="Расскажите о ваших пожеланиях..." />
                          </div>
                          <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white h-12">
                            Отправить заявку
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Map" size={18} className="text-[#D4AF37]" />
              <span className="text-sm font-semibold text-[#D4AF37]">Проверенные маршруты</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Маршруты туров</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите готовый маршрут или создадим индивидуальный специально для вас
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {routes.map((route, index) => (
              <button
                key={index}
                onClick={() => setActiveRoute(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeRoute === index
                    ? 'bg-[#D4AF37] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {route.name}
              </button>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto shadow-xl border-0">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-playfair text-[#1A1F2C]">{routes[activeRoute].name}</h3>
                    <p className="text-gray-600">{routes[activeRoute].duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 bg-[#D4AF37]/5 p-4 rounded-lg border-l-4 border-[#D4AF37]">
                  {routes[activeRoute].highlights}
                </p>
              </div>

              <div className="space-y-3">
                {routes[activeRoute].cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#D4AF37]/5 transition-colors">
                    <div className="w-8 h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#1A1F2C]">{city}</div>
                    </div>
                    <Icon name="ChevronRight" className="text-gray-400" size={20} />
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Button onClick={() => scrollToSection('contact')} className="flex-1 bg-[#D4AF37] hover:bg-[#B8941F] text-white h-12">
                  Заказать этот маршрут
                </Button>
                <Button variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white">
                  <Icon name="Download" size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-gradient-to-b from-[#F5F1E8] to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Camera" size={18} className="text-[#D4AF37]" />
              <span className="text-sm font-semibold text-[#D4AF37]">Фотогалерея</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Красота Золотого кольца</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Взгляните на величественную архитектуру древних русских городов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm font-semibold text-[#D4AF37] mb-1">{item.category}</div>
                    <h3 className="text-xl font-bold font-playfair">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
