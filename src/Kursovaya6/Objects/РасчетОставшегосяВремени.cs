﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya6
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расчет оставшегося времени.
    /// </summary>
    // *** Start programmer edit section *** (РасчетОставшегосяВремени CustomAttributes)

    // *** End programmer edit section *** (РасчетОставшегосяВремени CustomAttributes)
    [AutoAltered()]
    [Caption("Расчет оставшегося времени")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасчетОставшегосяВремениE", new string[] {
            "Использовано as \'Использовано\'",
            "Доступно as \'Доступно\'"})]
    public class РасчетОставшегосяВремени : ICSSoft.STORMNET.DataObject
    {
        
        private int fИспользовано;
        
        private int fДоступно;
        
        private IIS.Kursovaya6.ДиректорОтделаПоРаботеСКлиентами fДиректорОтделаПоРаботеСКлиентами;
        
        private IIS.Kursovaya6.РасторжениеДоговора fРасторжениеДоговора;
        
        private IIS.Kursovaya6.ОказаниеКонсультаций fОказаниеКонсультаций;
        
        // *** Start programmer edit section *** (РасчетОставшегосяВремени CustomMembers)

        // *** End programmer edit section *** (РасчетОставшегосяВремени CustomMembers)

        
        /// <summary>
        /// Доступно.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОставшегосяВремени.Доступно CustomAttributes)

        // *** End programmer edit section *** (РасчетОставшегосяВремени.Доступно CustomAttributes)
        public virtual int Доступно
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Доступно Get start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Доступно Get start)
                int result = this.fДоступно;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Доступно Get end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Доступно Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Доступно Set start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Доступно Set start)
                this.fДоступно = value;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Доступно Set end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Доступно Set end)
            }
        }
        
        /// <summary>
        /// Использовано.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОставшегосяВремени.Использовано CustomAttributes)

        // *** End programmer edit section *** (РасчетОставшегосяВремени.Использовано CustomAttributes)
        public virtual int Использовано
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Использовано Get start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Использовано Get start)
                int result = this.fИспользовано;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Использовано Get end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Использовано Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Использовано Set start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Использовано Set start)
                this.fИспользовано = value;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.Использовано Set end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.Использовано Set end)
            }
        }
        
        /// <summary>
        /// Расчет оставшегося времени.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами CustomAttributes)

        // *** End programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами CustomAttributes)
        [PropertyStorage(new string[] {
                "ДиректорОтделаПоРаботеСКлиентами"})]
        [NotNull()]
        public virtual IIS.Kursovaya6.ДиректорОтделаПоРаботеСКлиентами ДиректорОтделаПоРаботеСКлиентами
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Get start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Get start)
                IIS.Kursovaya6.ДиректорОтделаПоРаботеСКлиентами result = this.fДиректорОтделаПоРаботеСКлиентами;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Get end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Set start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Set start)
                this.fДиректорОтделаПоРаботеСКлиентами = value;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Set end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ДиректорОтделаПоРаботеСКлиентами Set end)
            }
        }
        
        /// <summary>
        /// Расчет оставшегося времени.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора CustomAttributes)

        // *** End programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора CustomAttributes)
        [PropertyStorage(new string[] {
                "РасторжениеДоговора"})]
        [NotNull()]
        public virtual IIS.Kursovaya6.РасторжениеДоговора РасторжениеДоговора
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Get start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Get start)
                IIS.Kursovaya6.РасторжениеДоговора result = this.fРасторжениеДоговора;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Get end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Set start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Set start)
                this.fРасторжениеДоговора = value;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Set end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.РасторжениеДоговора Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya6.ОказаниеКонсультаций.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций CustomAttributes)

        // *** End programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ОказаниеКонсультаций"})]
        public virtual IIS.Kursovaya6.ОказаниеКонсультаций ОказаниеКонсультаций
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Get start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Get start)
                IIS.Kursovaya6.ОказаниеКонсультаций result = this.fОказаниеКонсультаций;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Get end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Set start)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Set start)
                this.fОказаниеКонсультаций = value;
                // *** Start programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Set end)

                // *** End programmer edit section *** (РасчетОставшегосяВремени.ОказаниеКонсультаций Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасчетОставшегосяВремениE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетОставшегосяВремениE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетОставшегосяВремениE", typeof(IIS.Kursovaya6.РасчетОставшегосяВремени));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of РасчетОставшегосяВремени.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРасчетОставшегосяВремени CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРасчетОставшегосяВремени CustomAttributes)
    public class DetailArrayOfРасчетОставшегосяВремени : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya6.DetailArrayOfРасчетОставшегосяВремени members)

        // *** End programmer edit section *** (IIS.Kursovaya6.DetailArrayOfРасчетОставшегосяВремени members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type РасчетОставшегосяВремени by index.
        /// </summary>
        /// <summary>
        /// Adds object with type РасчетОставшегосяВремени.
        /// </summary>
        public DetailArrayOfРасчетОставшегосяВремени(IIS.Kursovaya6.ОказаниеКонсультаций fОказаниеКонсультаций) : 
                base(typeof(РасчетОставшегосяВремени), ((ICSSoft.STORMNET.DataObject)(fОказаниеКонсультаций)))
        {
        }
        
        public IIS.Kursovaya6.РасчетОставшегосяВремени this[int index]
        {
            get
            {
                return ((IIS.Kursovaya6.РасчетОставшегосяВремени)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya6.РасчетОставшегосяВремени dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
