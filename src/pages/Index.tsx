import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-slate-900">
                AWG<span className="text-blue-600">Security</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Услуги</a>
                <a href="#siem" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">SIEM</a>
                <a href="#expertise" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Экспертиза</a>
                <a href="#cases" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Кейсы</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Контакты</a>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
              Получить аудит
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Кибербезопасность
                </Badge>
                <h1 className="text-5xl font-bold leading-tight">
                  Защищаем ваш <span className="text-blue-400">цифровой бизнес</span> от киберугроз
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Комплексные решения по информационной безопасности, ИТ-аудиту и внедрению SIEM-систем. 
                  Специализируемся на защите e-commerce проектов.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Icon name="CheckCircle" size={20} className="text-green-400" />
                  <span>15+ лет опыта</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Icon name="CheckCircle" size={20} className="text-green-400" />
                  <span>200+ защищенных проектов</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Icon name="CheckCircle" size={20} className="text-green-400" />
                  <span>24/7 мониторинг</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-xl">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать презентацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0bcb5399-4da1-477a-84fd-ec4e5b7bd1e3.jpg" 
                alt="Cybersecurity Dashboard" 
                className="rounded-2xl shadow-2xl w-full border border-blue-500/20"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Система активна
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Комплексная защита вашего бизнеса
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по информационной безопасности 
              с акцентом на e-commerce и финтех проекты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Shield" size={28} className="text-white" />
                </div>
                <CardTitle className="text-slate-900 text-xl">ИТ-аудит безопасности</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Комплексная проверка ИТ-инфраструктуры на уязвимости, 
                  анализ защищенности и рекомендации по устранению рисков
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="Clock" size={16} className="mr-2" />
                    2-4 недели
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Eye" size={28} className="text-white" />
                </div>
                <CardTitle className="text-slate-900 text-xl">SIEM системы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Внедрение и настройка систем управления событиями 
                  и инцидентами безопасности для непрерывного мониторинга
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="Activity" size={16} className="mr-2" />
                    24/7 мониторинг
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="ShoppingCart" size={28} className="text-white" />
                </div>
                <CardTitle className="text-slate-900 text-xl">Защита E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Специализированные решения для интернет-магазинов: 
                  защита платежей, персональных данных и торговых процессов
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    PCI DSS соответствие
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="AlertTriangle" size={28} className="text-white" />
                </div>
                <CardTitle className="text-slate-900 text-xl">Реагирование на инциденты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Оперативное реагирование на киберинциденты, 
                  расследование атак и восстановление после компрометации
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Время отклика 30 мин
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={28} className="text-white" />
                </div>
                <CardTitle className="text-slate-900 text-xl">Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Программы повышения киберграмотности сотрудников, 
                  тренинги по выявлению угроз и безопасной работе
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="GraduationCap" size={16} className="mr-2" />
                    Сертификация
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="FileCheck" size={28} className="text-white" />
                </div>
                <CardTitle className="text-slate-900 text-xl">Соответствие стандартам</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Подготовка к сертификации по ISO 27001, 
                  ГОСТ Р ИСО/МЭК 27001, PCI DSS и другим стандартам
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-500">
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
      <section id="siem" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 mb-6">
                <Icon name="Activity" size={16} className="mr-2" />
                SIEM Технологии
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Системы мониторинга и управления событиями безопасности
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Внедряем передовые SIEM-решения для непрерывного контроля 
                безопасности вашей ИТ-инфраструктуры в режиме реального времени.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Zap" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Splunk & ELK Stack</h3>
                    <p className="text-slate-300">Настройка и интеграция ведущих SIEM-платформ для сбора и анализа логов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Brain" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                    <p className="text-slate-300">Внедрение алгоритмов машинного обучения для выявления аномалий и угроз</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Bell" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Автоматические уведомления</h3>
                    <p className="text-slate-300">Настройка системы оповещений о критических событиях безопасности</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                  <Icon name="Settings" size={20} className="mr-2" />
                  Настроить SIEM
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/df038fd9-db81-489c-a648-281882eb3db1.jpg" 
                alt="Security Operations Center" 
                className="rounded-2xl shadow-2xl w-full border border-purple-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">
              Наша экспертиза
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Специализация в E-commerce безопасности
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Глубокие знания специфики защиты интернет-торговли и электронных платежей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ShoppingBag" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">150+</h3>
              <p className="text-slate-600">E-commerce проектов</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">50+</h3>
              <p className="text-slate-600">Платежных систем</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">1млрд+</h3>
              <p className="text-slate-600">Защищенных транзакций</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">99.9%</h3>
              <p className="text-slate-600">Время безотказной работы</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Icon name="Target" size={32} className="text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">PCI DSS Compliance</h3>
                <p className="text-slate-600">Обеспечиваем соответствие стандартам безопасности платежных карт</p>
              </div>
              <div className="space-y-4">
                <Icon name="Lock" size={32} className="text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Защита персональных данных</h3>
                <p className="text-slate-600">Соблюдение требований ФЗ-152 и GDPR при обработке клиентских данных</p>
              </div>
              <div className="space-y-4">
                <Icon name="TrendingUp" size={32} className="text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Fraud Prevention</h3>
                <p className="text-slate-600">Системы предотвращения мошенничества в электронной коммерции</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Начните защищать свой бизнес сегодня</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Получите бесплатную консультацию по кибербезопасности и ИТ-аудиту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" size={32} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  +7 (495) 123-45-67<br />
                  Круглосуточная поддержка
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" size={32} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  security@awg.ru<br />
                  Ответ в течение часа
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={32} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">Онлайн-консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Видеозвонок с экспертом<br />
                  Бесплатно 30 минут
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-xl shadow-2xl">
              <Icon name="Calendar" size={24} className="mr-3" />
              Записаться на консультацию
            </Button>
            <p className="text-slate-400 mt-4">Или позвоните прямо сейчас: +7 (495) 123-45-67</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
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