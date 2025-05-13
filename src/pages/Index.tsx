
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeNav, setActiveNav] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNav(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Шапка сайта с навигацией */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Icon name="Swim" className="text-sky-500 h-8 w-8" />
            <span className="font-montserrat font-bold text-xl">АкваПро</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {[
              { id: "home", label: "Главная" },
              { id: "about", label: "Обо мне" },
              { id: "services", label: "Услуги" },
              { id: "advantages", label: "Преимущества" },
              { id: "contact", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                  activeNav === item.id ? "text-sky-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <Button className="bg-sky-500 hover:bg-sky-600">
            <a href="tel:+79001234567">Позвонить</a>
          </Button>
        </div>
      </header>

      {/* Hero секция */}
      <section 
        id="home" 
        className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-sky-50 to-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-gray-900">
                Профессиональные <span className="text-sky-600">тренировки по плаванию</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Индивидуальный подход к каждому, от начинающих до профессионалов. 
                Научу правильной технике, помогу преодолеть страх воды или подготовиться к соревнованиям.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  Записаться на занятие
                </Button>
                <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1626293680154-22d2518f365c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                  alt="Тренер по плаванию" 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-900/80 to-transparent p-6">
                  <div className="text-white">
                    <p className="font-semibold text-xl">Александр Морозов</p>
                    <p>Мастер спорта по плаванию, 10+ лет опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О тренере */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">Обо мне</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-sky-100 shadow-lg w-64 h-64 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1677446015842-5bf93cbaf7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Тренер по плаванию" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="font-bold text-xl text-gray-900">Александр Морозов</h3>
                <p className="text-sky-600">Персональный тренер по плаванию</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Я профессиональный тренер по плаванию с более чем 10-летним опытом работы. 
                  Имею звание мастера спорта и педагогическое образование в сфере физической культуры.
                </p>
                <p className="text-gray-700">
                  За свою карьеру подготовил более 50 спортсменов, многие из которых стали победителями 
                  региональных и всероссийских соревнований. Работаю как с детьми от 5 лет, так и со взрослыми 
                  любого уровня подготовки.
                </p>
                <p className="text-gray-700">
                  Моя методика основана на индивидуальном подходе к каждому ученику 
                  и современных техниках обучения плаванию. Я уделяю особое внимание правильной технике, 
                  что позволяет моим ученикам быстро прогрессировать и избегать травм.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-sky-600 font-bold text-3xl">10+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-sky-600 font-bold text-3xl">500+</div>
                  <div className="text-gray-600">учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-sky-600 font-bold text-3xl">5</div>
                  <div className="text-gray-600">стилей плавания</div>
                </div>
                <div className="text-center">
                  <div className="text-sky-600 font-bold text-3xl">30+</div>
                  <div className="text-gray-600">медалей</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">Мои услуги</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Предлагаю разнообразные программы для всех уровней подготовки и возрастов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-4 mx-auto">
                  <Icon name="Baby" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Обучение детей</h3>
                <p className="text-gray-700 text-center mb-4">
                  Игровая форма обучения, адаптация к воде, освоение базовых техник плавания для детей от 5 лет
                </p>
                <div className="text-center font-semibold text-sky-600 mt-2">от 1 500 ₽ / занятие</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-4 mx-auto">
                  <Icon name="Users" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Тренировки для начинающих</h3>
                <p className="text-gray-700 text-center mb-4">
                  Освоение правильной техники плавания с нуля, преодоление страха воды, базовые навыки плавания
                </p>
                <div className="text-center font-semibold text-sky-600 mt-2">от 2 000 ₽ / занятие</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-4 mx-auto">
                  <Icon name="Timer" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Спортивное плавание</h3>
                <p className="text-gray-700 text-center mb-4">
                  Подготовка к соревнованиям, совершенствование техники и скорости, индивидуальные программы
                </p>
                <div className="text-center font-semibold text-sky-600 mt-2">от 2 500 ₽ / занятие</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
              Посмотреть все услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">Мои преимущества</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Почему стоит выбрать именно меня в качестве персонального тренера по плаванию
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-sky-100 text-sky-600 mb-4">
                <Icon name="Medal" className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Профессионализм</h3>
              <p className="text-gray-700">
                Мастер спорта с педагогическим образованием и многолетним опытом тренерской работы
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-sky-100 text-sky-600 mb-4">
                <Icon name="PersonStanding" className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Индивидуальный подход</h3>
              <p className="text-gray-700">
                Составление программы с учетом ваших целей, возможностей и особенностей организма
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-sky-100 text-sky-600 mb-4">
                <Icon name="BarChart" className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Измеримые результаты</h3>
              <p className="text-gray-700">
                Регулярное отслеживание прогресса и корректировка программы тренировок
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-sky-100 text-sky-600 mb-4">
                <Icon name="HeartHandshake" className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Поддержка</h3>
              <p className="text-gray-700">
                Мотивация и психологическая поддержка на всех этапах обучения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 bg-sky-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Свяжитесь со мной</h2>
            <div className="w-20 h-1 bg-sky-300 mx-auto"></div>
            <p className="text-sky-100 mt-4 max-w-2xl mx-auto">
              Готов ответить на ваши вопросы и помочь выбрать подходящую программу тренировок
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/2">
              <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-sky-900">Форма обратной связи</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                    <textarea 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 h-32"
                      placeholder="Опишите ваш запрос или вопрос..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    Отправить сообщение
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="h-5 w-5 text-sky-300 mt-1" />
                      <div>
                        <p className="font-medium">Телефон:</p>
                        <p>+7 (900) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="h-5 w-5 text-sky-300 mt-1" />
                      <div>
                        <p className="font-medium">Email:</p>
                        <p>swim.coach@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="h-5 w-5 text-sky-300 mt-1" />
                      <div>
                        <p className="font-medium">Адрес:</p>
                        <p>г. Москва, ул. Спортивная, 25</p>
                        <p>Бассейн "Дельфин"</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Время работы</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница:</span>
                      <span>9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота:</span>
                      <span>10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье:</span>
                      <span>Выходной</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
                  <div className="flex gap-4">
                    <Button size="icon" variant="outline" className="border-sky-300 hover:bg-sky-800 text-white">
                      <Icon name="Instagram" className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-sky-300 hover:bg-sky-800 text-white">
                      <Icon name="Facebook" className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-sky-300 hover:bg-sky-800 text-white">
                      <Icon name="Youtube" className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-sky-300 hover:bg-sky-800 text-white">
                      <Icon name="MessageCircle" className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Swim" className="text-sky-500 h-6 w-6" />
              <span className="font-montserrat font-bold text-xl">АкваПро</span>
            </div>
            
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© 2025 Все права защищены. Персональный тренер по плаванию.</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
