import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeRoute, setActiveRoute] = useState(0);

  const tours = [
    {
      title: 'Индивидуальный VIP тур',
      description: 'Персональный водитель, комфортный автомобиль премиум-класса',
      price: 'от 45 000 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    },
    {
      title: 'Гастрономический тур',
      description: 'С шеф-поваром: традиционная кухня и авторские блюда',
      price: 'от 55 000 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      features: ['Мастер-классы от шефа', 'Дегустации', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      title: 'Фототур для профессионалов',
      description: 'Лучшие локации и рассветы с профессиональным фотографом',
      price: 'от 40 000 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    },
    {
      title: 'Духовное путешествие',
      description: 'Монастыри и храмы с духовным наставником',
      price: 'от 38 000 ₽',
      duration: '3-7 дней',
      icon: 'Church',
      features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места']
    }
  ];

  const routes = [
    {
      name: 'Классический маршрут',
      cities: ['Сергиев Посад', 'Переславль-Залесский', 'Ростов Великий', 'Ярославль', 'Кострома', 'Иваново', 'Суздаль', 'Владимир'],
      duration: '7 дней'
    },
    {
      name: 'Экспресс-маршрут',
      cities: ['Сергиев Посад', 'Суздаль', 'Владимир'],
      duration: '3 дня'
    },
    {
      name: 'Расширенный маршрут',
      cities: ['Москва', 'Сергиев Посад', 'Переславль', 'Ростов', 'Ярославль', 'Кострома', 'Плёс', 'Иваново', 'Суздаль', 'Владимир', 'Боголюбово'],
      duration: '10 дней'
    }
  ];

  const gallery = [
    { title: 'Суздальский кремль', category: 'Архитектура' },
    { title: 'Ростовский кремль', category: 'Памятники' },
    { title: 'Церковь Покрова на Нерли', category: 'Храмы' },
    { title: 'Ярославль', category: 'Города' },
    { title: 'Троице-Сергиева Лавра', category: 'Монастыри' },
    { title: 'Владимирские соборы', category: 'Архитектура' }
  ];

  const faqs = [
    {
      q: 'Что входит в стоимость VIP тура?',
      a: 'Автомобиль премиум-класса с водителем, проживание в отелях 5★, услуги персонального гида, все трансферы, входные билеты в музеи и достопримечательности, страховка.'
    },
    {
      q: 'Можно ли изменить маршрут тура?',
      a: 'Да, все наши туры полностью индивидуальные. Мы составим маршрут специально под ваши пожелания и интересы.'
    },
    {
      q: 'Какие автомобили используются?',
      a: 'Mercedes-Benz S-Class, BMW 7 серии, Audi A8 или аналогичные премиум автомобили в идеальном состоянии с профессиональными водителями.'
    },
    {
      q: 'Сколько человек в группе?',
      a: 'Это исключительно индивидуальные туры. Только вы, ваши спутники и персональный гид. Никаких групп.'
    },
    {
      q: 'Как забронировать тур?',
      a: 'Заполните форму обратной связи или позвоните нам. Мы обсудим детали, составим программу и забронируем тур на удобные даты.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1E8] to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1A1F2C]/95 backdrop-blur-sm z-50 border-b border-[#D4AF37]/20">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Crown" className="text-[#D4AF37]" size={28} />
            <span className="text-2xl font-bold text-[#D4AF37] font-cormorant">
              Золотое Кольцо VIP
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#tours" className="text-white hover:text-[#D4AF37] transition-colors">Туры</a>
            <a href="#routes" className="text-white hover:text-[#D4AF37] transition-colors">Маршруты</a>
            <a href="#gallery" className="text-white hover:text-[#D4AF37] transition-colors">Галерея</a>
            <a href="#faq" className="text-white hover:text-[#D4AF37] transition-colors">FAQ</a>
            <a href="#contact" className="text-white hover:text-[#D4AF37] transition-colors">Контакты</a>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A1F2C] font-semibold">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-[#1A1F2C] mb-6 font-cormorant">
              Эксклюзивные туры<br />
              <span className="text-[#D4AF37]">по Золотому кольцу</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Индивидуальные VIP туры по древним городам России с персональным водителем и комфортными автомобилями премиум-класса
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A1F2C] text-lg px-8 font-semibold">
                Подобрать тур
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: 'Car', title: 'Премиум авто', desc: 'Mercedes, BMW, Audi' },
              { icon: 'User', title: 'Личный гид', desc: 'Эксперт-историк' },
              { icon: 'Hotel', title: 'Отели 5★', desc: 'Лучшие гостиницы' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Полная страховка' }
            ].map((feature, i) => (
              <Card key={i} className="border-[#D4AF37]/30 hover:shadow-lg transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <Icon name={feature.icon} className="text-[#D4AF37] mx-auto mb-3" size={40} />
                  <h3 className="font-semibold text-[#1A1F2C] mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#1A1F2C] mb-4 font-cormorant">
              Наши <span className="text-[#D4AF37]">эксклюзивные туры</span>
            </h2>
            <p className="text-gray-600 text-lg">Каждый тур создан для незабываемых впечатлений</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour, i) => (
              <Card key={i} className="border-[#D4AF37]/30 hover:shadow-2xl transition-all hover:scale-105 overflow-hidden">
                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Icon name={tour.icon} className="text-[#D4AF37]" size={48} />
                    <span className="text-sm bg-[#D4AF37] text-[#1A1F2C] px-3 py-1 rounded-full font-semibold">
                      {tour.duration}
                    </span>
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-[#1A1F2C] font-cormorant">
                      {tour.title}
                    </CardTitle>
                    <CardDescription className="text-base">{tour.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 mb-6">
                      {tour.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Icon name="Check" className="text-[#D4AF37]" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#D4AF37] font-cormorant">
                        {tour.price}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A1F2C] font-semibold">
                            Забронировать
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-cormorant">
                              Бронирование тура
                            </DialogTitle>
                            <DialogDescription>
                              Оставьте заявку, и мы свяжемся с вами в течение часа
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4 mt-4">
                            <Input placeholder="Ваше имя" />
                            <Input type="tel" placeholder="Телефон" />
                            <Input type="email" placeholder="Email" />
                            <Textarea placeholder="Пожелания к туру" />
                            <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A1F2C] font-semibold">
                              Отправить заявку
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-20 px-4 bg-gradient-to-b from-[#F5F1E8] to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#1A1F2C] mb-4 font-cormorant">
              Популярные <span className="text-[#D4AF37]">маршруты</span>
            </h2>
            <p className="text-gray-600 text-lg">Выберите готовый маршрут или создадим индивидуальный</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {routes.map((route, i) => (
              <Card
                key={i}
                className={`cursor-pointer transition-all ${
                  activeRoute === i
                    ? 'border-[#D4AF37] shadow-xl scale-105'
                    : 'border-gray-200 hover:border-[#D4AF37]/50'
                }`}
                onClick={() => setActiveRoute(i)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="font-cormorant">{route.name}</span>
                    <Icon name="MapPin" className="text-[#D4AF37]" size={24} />
                  </CardTitle>
                  <CardDescription className="text-base font-semibold text-[#D4AF37]">
                    {route.duration}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="border-[#D4AF37]/30 bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1F2C] font-cormorant">
                Маршрут: {routes[activeRoute].name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {routes[activeRoute].cities.map((city, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-[#D4AF37] text-[#1A1F2C] rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium">{city}</span>
                    {i < routes[activeRoute].cities.length - 1 && (
                      <Icon name="ArrowRight" className="text-[#D4AF37] mx-2" size={20} />
                    )}
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A1F2C] font-semibold">
                Забронировать этот маршрут
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#1A1F2C] mb-4 font-cormorant">
              <span className="text-[#D4AF37]">Галерея</span> впечатлений
            </h2>
            <p className="text-gray-600 text-lg">Красота древних городов в лучших кадрах</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <Card key={i} className="overflow-hidden border-[#D4AF37]/30 hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-[#D4AF37]/20 to-[#1A1F2C]/20 flex items-center justify-center relative overflow-hidden">
                  <Icon name="Image" className="text-[#D4AF37] group-hover:scale-110 transition-transform" size={80} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-[#1A1F2C]">{item.title}</h3>
                  <p className="text-sm text-[#D4AF37]">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
              Смотреть все фото
              <Icon name="ExternalLink" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-[#F5F1E8] to-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#1A1F2C] mb-4 font-cormorant">
              Часто задаваемые <span className="text-[#D4AF37]">вопросы</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-[#D4AF37]/30 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#D4AF37]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#1A1F2C] mb-4 font-cormorant">
              <span className="text-[#D4AF37]">Свяжитесь</span> с нами
            </h2>
            <p className="text-gray-600 text-lg">Мы ответим в течение часа</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#D4AF37]/30">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-[#D4AF37] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500">Ежедневно 9:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-[#D4AF37] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">vip@goldring.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-[#D4AF37] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Офис</h3>
                    <p className="text-gray-600">г. Москва, Красная площадь, 1</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button size="icon" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                    <Icon name="Instagram" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#D4AF37]/30">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="tel" placeholder="Телефон" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Расскажите о ваших пожеланиях" rows={4} />
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A1F2C] font-semibold">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Crown" className="text-[#D4AF37]" size={28} />
                <span className="text-xl font-bold text-[#D4AF37] font-cormorant">
                  Золотое Кольцо VIP
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Эксклюзивные туры по древним городам России с персональным сервисом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Туры</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Индивидуальные</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Гастрономические</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Фототуры</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Духовные</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>vip@goldring.ru</li>
                <li>Москва, Красная площадь, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Золотое Кольцо VIP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
