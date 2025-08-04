import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-awg-darkBlue">AWG</div>
              <div className="hidden md:flex space-x-6">
                <a href="#main" className="text-gray-600 hover:text-awg-blue transition-colors">Главная</a>
                <a href="#about" className="text-gray-600 hover:text-awg-blue transition-colors">О компании</a>
                <a href="#services" className="text-gray-600 hover:text-awg-blue transition-colors">Услуги</a>
                <a href="#advantages" className="text-gray-600 hover:text-awg-blue transition-colors">Преимущества</a>
                <a href="#contacts" className="text-gray-600 hover:text-awg-blue transition-colors">Контакты</a>
              </div>
            </div>
            <Button className="bg-awg-blue hover:bg-awg-darkBlue">
              Связаться с нами
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="bg-gradient-to-br from-awg-lightBlue to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-awg-darkBlue mb-6">
                Ведущий ИТ-интегратор
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Услуги по ИТ-консалтингу и ИТ-аудиту, настройка и техническая поддержка 
                высоконагруженных проектов, разработка e-commerce и омниканальных решений для бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-awg-blue hover:bg-awg-darkBlue px-8">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-awg-blue text-awg-blue hover:bg-awg-blue hover:text-white">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0ed44301-e158-411f-9950-e831ce45a60b.jpg" 
                alt="Professional team" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-awg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-awg-darkBlue mb-4">О компании</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AWG — это команда профессионалов с многолетним опытом в сфере информационных технологий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-awg-lightBlue rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">15+ лет</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  опыта работы на рынке ИТ-услуг
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-awg-lightBlue rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  успешно реализованных проектов
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-awg-lightBlue rounded-full flex items-center justify-center mb-4">
                  <Icon name="Globe" size={32} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  техническая поддержка клиентов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-awg-darkBlue mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">
              Комплексные ИТ-решения для вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-awg-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">ИТ-консалтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Аудит ИТ-инфраструктуры, стратегическое планирование и оптимизация бизнес-процессов
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-awg-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">Разработка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Создание веб-приложений, мобильных приложений и корпоративных систем
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-awg-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShoppingCart" size={24} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Интернет-магазины, системы управления заказами и интеграция с платежными системами
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-awg-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cloud" size={24} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">Облачные решения</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Миграция в облако, настройка облачной инфраструктуры и гибридные решения
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-awg-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">Информационная безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Аудит безопасности, внедрение систем защиты и обучение персонала
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-awg-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Headphones" size={24} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">Техническая поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Круглосуточная поддержка, мониторинг систем и оперативное устранение инцидентов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-awg-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-awg-darkBlue mb-8">Наши преимущества</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-awg-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-awg-darkBlue mb-2">Экспертный уровень</h3>
                    <p className="text-gray-600">Команда сертифицированных специалистов с глубокими знаниями в области ИТ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-awg-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-awg-darkBlue mb-2">Индивидуальный подход</h3>
                    <p className="text-gray-600">Разработка решений с учетом специфики и потребностей каждого клиента</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-awg-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-awg-darkBlue mb-2">Полный цикл разработки</h3>
                    <p className="text-gray-600">От анализа требований до внедрения и поддержки готового решения</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-awg-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-awg-darkBlue mb-2">Современные технологии</h3>
                    <p className="text-gray-600">Использование передовых технологий и лучших практик разработки</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d55b973e-27f1-417d-9db8-9d22d6150b06.jpg" 
                alt="IT Infrastructure" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-awg-darkBlue mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-awg-lightBlue rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" size={32} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  +7 (495) 123-45-67<br />
                  +7 (800) 123-45-67
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-awg-lightBlue rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" size={32} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  info@awg.ru<br />
                  sales@awg.ru
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-awg-lightBlue rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-awg-blue" />
                </div>
                <CardTitle className="text-awg-darkBlue">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  г. Москва, ул. Примерная, д. 123<br />
                  офис 456
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-awg-blue hover:bg-awg-darkBlue px-8">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-awg-darkBlue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">AWG</div>
              <p className="text-gray-300">
                Ведущий ИТ-интегратор с 15-летним опытом работы
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>ИТ-консалтинг</li>
                <li>Разработка</li>
                <li>E-commerce</li>
                <li>Облачные решения</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-300">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Карьера</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@awg.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            <p>&copy; 2024 AWG. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;