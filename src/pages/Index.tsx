import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                AWG<span className="text-blue-600">Security</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Услуги</a>
              <a href="#siem" className="text-gray-600 hover:text-gray-900 transition-colors">SIEM</a>
              <a href="#expertise" className="text-gray-600 hover:text-gray-900 transition-colors">Экспертиза</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Получить аудит
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800 mb-6">
                <Icon name="Shield" size={16} className="mr-2" />
                Кибербезопасность
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Защищаем ваш <span className="text-blue-600">цифровой бизнес</span> от киберугроз
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Комплексные решения по информационной безопасности, ИТ-аудиту и внедрению SIEM-систем. 
                Специализируемся на защите e-commerce проектов.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-2" />
                  15+ лет опыта
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-2" />
                  200+ защищенных проектов
                </div>
                <div className="flex items-center text-gray-600">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-2" />
                  24/7 мониторинг
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать презентацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0bcb5399-4da1-477a-84fd-ec4e5b7bd1e3.jpg" 
                alt="Cybersecurity Dashboard" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Система активна
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800 mb-4">
              Наши услуги
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Комплексная защита вашего бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по информационной безопасности 
              с акцентом на e-commerce и финтех проекты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">ИТ-аудит безопасности</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Комплексная проверка ИТ-инфраструктуры на уязвимости, 
                  анализ защищенности и рекомендации по устранению рисков
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Clock" size={16} className="mr-2" />
                    2-4 недели
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Eye" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">SIEM системы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Внедрение и настройка систем управления событиями 
                  и инцидентами безопасности для непрерывного мониторинга
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Activity" size={16} className="mr-2" />
                    24/7 мониторинг
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShoppingCart" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">Защита E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Специализированные решения для интернет-магазинов: 
                  защита платежей, персональных данных и торговых процессов
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    PCI DSS соответствие
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="AlertTriangle" size={24} className="text-red-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">Реагирование на инциденты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Оперативное реагирование на киберинциденты, 
                  расследование атак и восстановление после компрометации
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Время отклика 30 мин
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-yellow-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Программы повышения киберграмотности сотрудников, 
                  тренинги по выявлению угроз и безопасной работе
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="GraduationCap" size={16} className="mr-2" />
                    Сертификация
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileCheck" size={24} className="text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">Соответствие стандартам</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Подготовка к сертификации по ISO 27001, 
                  ГОСТ Р ИСО/МЭК 27001, PCI DSS и другим стандартам
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Award" size={16} className="mr-2" />
                    Международные стандарты
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SIEM Section */}
      <section id="siem" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-800 mb-6">
                <Icon name="Activity" size={16} className="mr-2" />
                SIEM Технологии
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Системы мониторинга и управления событиями безопасности
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Внедряем передовые SIEM-решения для непрерывного контроля 
                безопасности вашей ИТ-инфраструктуры в режиме реального времени.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Zap" size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Splunk & ELK Stack</h3>
                    <p className="text-gray-600">Настройка и интеграция ведущих SIEM-платформ для сбора и анализа логов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Brain" size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
                    <p className="text-gray-600">Внедрение алгоритмов машинного обучения для выявления аномалий и угроз</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Bell" size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Автоматические уведомления</h3>
                    <p className="text-gray-600">Настройка системы оповещений о критических событиях безопасности</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">
                  <Icon name="Settings" size={20} className="mr-2" />
                  Настроить SIEM
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/df038fd9-db81-489c-a648-281882eb3db1.jpg" 
                alt="Security Operations Center" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-800 mb-4">
              Наша экспертиза
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Специализация в E-commerce безопасности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Глубокие знания специфики защиты интернет-торговли и электронных платежей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ShoppingBag" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">E-commerce проектов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Платежных систем</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1млрд+</h3>
              <p className="text-gray-600">Защищенных транзакций</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-600">Время безотказной работы</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Icon name="Target" size={32} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">PCI DSS Compliance</h3>
                <p className="text-gray-600">Обеспечиваем соответствие стандартам безопасности платежных карт</p>
              </div>
              <div className="space-y-4">
                <Icon name="Lock" size={32} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Защита персональных данных</h3>
                <p className="text-gray-600">Соблюдение требований ФЗ-152 и GDPR при обработке клиентских данных</p>
              </div>
              <div className="space-y-4">
                <Icon name="TrendingUp" size={32} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Fraud Prevention</h3>
                <p className="text-gray-600">Системы предотвращения мошенничества в электронной коммерции</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Начните защищать свой бизнес сегодня</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Получите бесплатную консультацию по кибербезопасности и ИТ-аудиту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-sm text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  +7 (495) 123-45-67<br />
                  Круглосуточная поддержка
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  security@awg.ru<br />
                  Ответ в течение часа
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Онлайн-консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Видеозвонок с экспертом<br />
                  Бесплатно 30 минут
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <p className="text-gray-500 mt-4">Или позвоните прямо сейчас: +7 (495) 123-45-67</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                AWG<span className="text-blue-400">Security</span>
              </div>
              <p className="text-gray-400">
                Лидер в области кибербезопасности и защиты e-commerce проектов
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ИТ-аудит безопасности</li>
                <li>SIEM системы</li>
                <li>Защита E-commerce</li>
                <li>Реагирование на инциденты</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Технологии</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Splunk</li>
                <li>ELK Stack</li>
                <li>IBM QRadar</li>
                <li>Microsoft Sentinel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Сертификации</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ISO 27001</li>
                <li>PCI DSS</li>
                <li>CISSP</li>
                <li>CISM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AWG Security. Все права защищены. | Лицензия ФСБ России</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;