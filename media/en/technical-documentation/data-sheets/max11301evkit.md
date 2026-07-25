<!-- lastmod 2022-08-03 -->
## MAX11301 Evaluation Kit

## General Description

The MAX11301 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX11301  20-port  programmable  mixed-signal  I/O  with  12-bit  ADC,  12-bit  DAC, analog  switches,  and  GPIO.  The  EV  kit  also  includes Windows  XP ® -,  Windows  Vista ® -,  Windows ®   7-,  and Windows  8.0-/8.1-compatible  software  that  provides  a simple  graphical  user  interface  (GUI)  for  exercising  the features of the IC.

The EV kit comes with a MAX11301GTL+ installed. For SPI interface, Maxim Integrated offers the pin-compatible and software-compatible MAX11300.

## Features and Benefits

- 20 PIXI TM  Ports for Analog or Digital Control or Sensing
- Two External Temperature Sensors (2N3904)
- 50-Pin Signal Header (20 Ports, Two Temperatures, and Power Supplies)
- I 2 C Interface Terminals
- Optional 2.5V On-Board Reference (MAX6071)
- Windows XP-, Windows Vista-, Windows 7-, and Windows 8.0-/8.1-Compatible Software
- USB-PC Connection (Cable Included)
- RoHS Compliant
- Proven Four-Layer PCB Layout
- Fully Assembled and Tested

## Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

PIXI is a trademark of Maxim Integrated Products, Inc.

Note: Active-low pin names such as INT are shown in the software and PCB layout with a B suffix (e.g., INTB).

Evaluates: MAX11301

## Quick Start

## Required Equipment

- EV kit (USB mini-B cable included)
- Windows XP, Windows Vista, Windows 7, Windows 8.0, or Windows 8.1 PC, running .NET v4, with a spare USB port
- ±12.5V DC at 500mA dual-output DC power supply
- Digital voltmeter (DVM)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX11300EVKitSetupV1.1.zip. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software and USB driver on your computer by running the MAX11300EVKitSetupV1.1.exe program  inside  the  temporary  folder.  The  program files are copied to your PC and icons are created in the  Windows Start  |  Programs menu.  During  software  installation,  some  versions  of  Windows  may show a warning message indicating that this software is  from  an  unknown  publisher.  This  is  not  an  error condition  and  it  is  safe  to  proceed  with  installation. Administrator  privileges  are  required  to  install  the USB device driver on Windows. Note: The software requires .NET Framework v4. If this framework is not detected  during  installation,  the  installer  launches dotNetFx40\_Full\_setup.exe  to  install  it.  Internet  access may be required to install the .NET Framework v4 if it is not already installed.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1, Table 2, Table 3, and Table 4.
- 4) Configure  the  power  supply  for  ±12.5V  DC  output  (typical  load  current  is  50mA)  (be  sure  to  keep AVDDIO - AVSSIO within rated supply range).

<!-- image -->

## MAX11301 Evaluation Kit

- 5) Connect  the  +12.5V  DC  power  supply  between AVDDIO  (+)  and  GND  (-).  Connect  the  -12.5V  DC power supply between AVSSIO (-) and GND (+).
- 6) Connect the DVM- to GND (-)
- 7) Enable the power-supply output.
- 8) Connect  the  USB  cable  from  the  PC  to  the  EV  kit board. A Windows message appears when connecting the EV kit board to the PC for the first time. Each version of Windows has a slightly different message. If  you  see  a  Windows  message  stating Ready  to Use ,  proceed to the next step. Otherwise, open the USB\_Driver\_Help\_200.PDF  document  in  the  Windows Start | Programs menu to verify that the USB driver was installed successfully.
- 9) Use the DVM+ to verify the test point voltages shown in Table 7.
- 10)  Start the MAX11300 Configuration Software by opening its icon in the Windows Start | Programs menu.

The MAX11300 configuration software main window appears, as shown in Figure 1. Drag and drop components into the device, wire them up, and then use the File menu  | Generate  Registers to  export  the configuration to MAX11300Register.csv.

- 11)  Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start  |  Programs menu. The EV kit software main window appears, as shown in Figure 2.
- 12)  Select File menu | Load Configuration... | MAX11300Register.csv to  load  the  configuration into  the  MAX11301.  Alternatively,  use  one  of  the prebuilt demo configurations, such as MAX11300Reg-ister\_20131115\_1505.csv,  which  configures  all  20 PIXI ports with different configurations.
- 13)  Select  the Chart tab,  then  check Options menu  | Polling to show the analog inputs on a graph. Select the Data tab to see the low-level input code values in hexadecimal.

Figure 1. MAX11300 Configuration Software

<!-- image -->

│

## Detailed Description of EV Kit Software

The Device  Configuration tab  (Figure  2)  accesses the  global  device  control  registers,  interrupt  sources,

temperature  limits,  DAC  presets,  and  ADC  conversion rate. Changing the controls on the GUI writes the corresponding registers immediately.

Figure 2. Device Configuration Tab

<!-- image -->

│

Evaluates: MAX11301

Figure 3. Data Tab

<!-- image -->

## MAX11301 Evaluation Kit

The Data tab  (Figure  3)  presents  a  tabular  display  of all  PIXI  ports  and  temperature  channels.  Double-click in  the Configured As cells  to  jump  directly  to  the Pin Configuration tab  (Figure  5)  for  the  corresponding  pin. Each row represents one of the PIXI ports or one of the temperature  sensors.  Some  configurations  enable DAC

Evaluates: MAX11301

Out or GPO Out controls,  or  provide ADC or GPI input values.  Pins  configured  for  GPI  input  can  be  used  as interrupt sources by double-clicking in the Interrupt cell.

Select  the Chart tab  (Figure  4),  then  check Options menu | Polling to show the analog inputs on a graph.

Figure 4 Chart Tab

<!-- image -->

│

## MAX11301 Evaluation Kit

The PIXI ports can be viewed and manually adjusted from the Pin  Configuration tab.  Selecting  the  pin  function affects the choices in the other four fields. The software does not attempt to validate the configuration.

The normal development flow is to start in the MAX11300 Configuration  software,  use  its Generate  Registers menu item to export the registers to a *.csv file, then use the EV kit software to connect to the hardware and load that *.csv file.

## Evaluates: MAX11301

The  GPIO1-GPIO3  pins  are  spare  outputs  from  the MAXQ2000 microcontroller that can be optionally used to support external diagnostic testing. They are not part of the MAX11301.

The supply voltages are used to help validate the available  operating  ranges,  but  the  software  has  no  way  to independently verify that the nominal values are actually present.

Figure 5. Pin Configuration Tab

<!-- image -->

│

## MAX11301 Evaluation Kit

The Registers tab (Figure 6) provides a tabular display of all registers of the device, supporting low-level read and write operations in hexadecimal. Write is effective by the

Write button.  Refer  to  the  MAX11301  IC  data  sheet  for the meaning and format of the various registers.

The History tab provides a diagnostic log of the commands sent to the EV kit.

Figure 6. Registers Tab

<!-- image -->

│

## MAX11301 Evaluation Kit

## Detailed Description of Hardware

The  MAX11301  EV  kit  uses  an  on-board  MAXQ2000 microcontroller  (U120)  to  send  SPI  commands  to  the device.  On-board  level  translators  (U101,  U102,  and U105) convert from 3.3V to 5V levels. On-board MAX6071 voltage  references  (U3,  U6)  provide  ADC  and  DAC reference voltages. Remote temperature sensing can be simulated by on-board 3904 npn transistors (D0, D1). See Figure 7.

## Connecting to User-Supplied Circuitry

The  EV  kit  connects  to  external,  user-supplied  circuitry through  header  J1  or  J2.  These  two  headers  have  the same signals; J1 is for vertical 50-pin ribbon-cable connection and J2 is for right-angle connection to a sideboard by standard 0.100in right-angle pins.

If  remote  temperature  sensing  is  used,  disconnect  onboard npn transistors D0 and D1 by moving the shunts of JUD0P, JUD0N, JUD1P, and J1D1N to the 1-4 position.

Figure 7. MAX11301 EV Kit Hardware Overview

<!-- image -->

## Table 1. Jumper Configuration (Power Supply)

| JUMPER        | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                               |
|---------------|----------|------------------|-----------------------------------------------------------|
| JU_AVSSIO_GND | AVSSIO   | No Shunt*        | AVSSIO must be supplied by user negative power supply     |
| JU_AVSSIO_GND | AVSSIO   | 1-2              | AVSSIO = GND                                              |
| JU_DVDD       | DVDD     | 1-2*             | DVDD is supplied from MAX1659 +5V LDO powered from AVDDIO |
| JU_DVDD       | DVDD     | 2-3              | DVDD is supplied from USB                                 |
| JU_DVDD       | DVDD     | No Shunt         | DVDD must be supplied by user power supply                |
| JU_AVDD       | AVDD     | 1-2*             | AVDD is supplied from DVDD directly                       |
| JU_AVDD       | AVDD     | 2-3              | AVDD is supplied from DVDD, filtered by RAVDD and CAVDD   |
| JU_AVDD       | AVDD     | No Shunt         | AVDD must be supplied by user power supply                |

│

Table 1. Jumper Configuration (Power Supply) (continued)

| JUMPER       | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                                                      |
|--------------|----------|------------------|----------------------------------------------------------------------------------|
| JU_U1_AVDDIO | AVDDIO   | 1-2**            | Measure the supply current by putting a current meter in series with the jumper. |
| JU_U1_AVSSIO | AVSSIO   | 1-2**            | Measure the supply current by putting a current meter in series with the jumper. |
| JU_U1_AVDD   | AVDD     | 1-2**            | Measure the supply current by putting a current meter in series with the jumper. |
| JU_U1_DVDD   | DVDD     | 1-2**            | Measure the supply current by putting a current meter in series with the jumper. |

Table 2. Jumper Configuration (Digital Interface)

| JUMPER      | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                       |
|-------------|----------|------------------|---------------------------------------------------|
| JU_SDA_DIN  |          | 1-2              | SDA_DIN = MAXQ_MOSI (SPI interface mode)          |
| JU_SDA_DIN  | SDA_DIN  | 2-3**            | SDA_DIN = MAXQ_SDA(I 2 C interface mode)          |
| JU_SDA_DIN  |          | No Shunt         | SDA_DIN = User-supplied connection                |
| JU_SDA      | SDA      | 1-2**            | SDApullup to DVDD by R103 (I 2 C interface mode)  |
| JU_SDA      | SDA      | No Shunt         | R103 is not connected (SPI interface mode)        |
| JU_SCL_SCLK |          | 1-2              | SCL_SCLK = MAXQ_SCLK (SPI interface mode)         |
| JU_SCL_SCLK | SCL_SCLK | 2-3**            | SCL_SCLK = MAXQ_SCL (I 2 C interface mode)        |
| JU_SCL_SCLK |          | No Shunt         | SCL_SCLK = User-supplied connection               |
| JU_SCL      | SCL      | 1-2**            | SCL pullup to DVDD by R104 (I 2 C interface mode) |
| JU_SCL      | SCL      | No Shunt         | R104 is not connected (SPI interface mode)        |
| JU_AD0_CSB  |          | 1-2              | AD0/CSB = MAXQ_CS (SPI interface mode)            |
| JU_AD0_CSB  |          | 3-4**            | AD0/CSB = DVDD (I 2 C interface mode)             |
| JU_AD0_CSB  | AD0/CSB  | 5-6              | AD0/CSB = SCL_SCLK (I 2 C interface mode)         |
| JU_AD0_CSB  |          | 7-8              | AD0/CSB = SDA_DIN (I 2 C interface mode)          |
| JU_AD0_CSB  |          | 9-10             | AD0/CSB = DGND. (I 2 C interface mode)            |
| JU_AD1_DOUT |          | 1-2              | AD1/DOUT = DGND (I 2 C interface mode)            |
| JU_AD1_DOUT | AD1/DOUT | 1-3              | AD1/DOUT = MAXQ_MOSI.(SPI interface mode)         |
| JU_AD1_DOUT |          | 1-4**            | AD1/DOUT = DVDD (I 2 C interface mode)            |
| JU_INTB     | INTB     | 1-2**            | INTB = MAXQ_K5 interrupt input to microcontroller |
| JU_INTB     | INTB     | Open             | INTB = user-supplied connection                   |
| JU_CNVTB    | CNVTB    | 1-2**            | CNVTB = MAXQ_K4 output from microcontroller       |
| JU_CNVTB    | CNVTB    | Open             | CNVTB = user-supplied connection                  |

Evaluates: MAX11301

Evaluates: MAX11301

Table 3. MAX11301EVKIT Jumper Configuration (Temperature Sensor)

| JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                                                                               |
|----------|----------|------------------|-----------------------------------------------------------------------------------------------------------|
| JUD0P    | D0P      | 1-2              | 10Ω resistor RD0P emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD0P    | D0P      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD0P    | D0P      | 1-4              | Connect external temperature sense diode junction to D0P_ext/D0N_ext pair on header J1, J2, or J3         |
| JUD0N    | D0N      | 1-2              | 10Ω resistor RD0N emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD0N    | D0N      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD0N    | D0N      | 1-4              | Connect external temperature sense diode junction to D0P_ext/D0N_ext pair on header J1, J2, or J3         |
| JUD1P    | D1P      | 1-2              | 10Ω resistor RD1P emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD1P    | D1P      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD1P    | D1P      | 1-4              | Connect external temperature sense diode junction to D1P_ext/D1N_ext pair on header J1, J2, or J3         |
| JUD1N    | D1N      | 1-2              | 10Ω resistor RD1N emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD1N    | D1N      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD1N    | D1N      | 1-4              | Connect external temperature sense diode junction to D1P_ext/D1N_ext pair on header J1, J2, or J3         |

* Default position.

Table 4. MAX11301EVKIT Jumper Configuration (On-Board External References)

| JUMPER      | SIGNAL      | SHUNT POSITION   | DESCRIPTION                                                            |
|-------------|-------------|------------------|------------------------------------------------------------------------|
| JU_ADC_REF  | ADC_EXT_REF | 1-2*             | On-board MAX6071 reference U2 drives ADC_EXT_REF                       |
| JU_ADC_REF  | ADC_EXT_REF | Open             | On-board MAX6071 reference U2 is disconnected from ADC_EXT_REF         |
| JU_DAC_REF  | DAC_REF     | 1-2*             | On-board MAX6071 reference U3 drives DAC_REF (Kelvin connection force) |
| JU_DAC_REF  | DAC_REF     | Open             | On-board MAX6071 reference U3 is disconnected from DAC_REF             |
| JU_DAC_REFS | DAC_REFS    | 1-2*             | On-board MAX6071 reference U3 drives DAC_REF (Kelvin connection sense) |
| JU_DAC_REFS | DAC_REFS    | Open             | On-board MAX6071 reference U3 is disconnected from DAC_REF             |

│

Evaluates: MAX11301

## Table 5. MAX11301EVKIT Jumper Configuration (Microcontroller)

| JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                                                      |
|----------|----------|------------------|----------------------------------------------------------------------------------|
| JU_LED1  | MAXQ_K1  | 1-2*             | MAXQ2000 port 0.0 (MINIQUSB firmware signal K1) drives diagnostic indicator LED1 |
| JU_LED1  | MAXQ_K1  | Open             | MAXQ2000 port 0.0 (MINIQUSB firmware signal K1) is disconnected from LED1        |
| JU_LED2  | MAXQ_K2  | 1-2*             | MAXQ2000 port 0.1 (MINIQUSB firmware signal K2) drives diagnostic indicator LED2 |
| JU_LED2  | MAXQ_K2  | Open             | MAXQ2000 port 0.1 (MINIQUSB firmware signal K2) is disconnected from LED2        |
| JU_LED3  | MAXQ_K3  | 1-2*             | MAXQ2000 port 0.2 (MINIQUSB firmware signal K3) drives diagnostic indicator LED3 |
| JU_LED3  | MAXQ_K3  | Open             | MAXQ2000 port 0.2 (MINIQUSB firmware signal K3) is disconnected from LED3        |

## Table 6. Microcontroller Resources

| GPIO SIGNAL   | DIRECTION                   | JUMPER   | DESCRIPTION                                                                                         |
|---------------|-----------------------------|----------|-----------------------------------------------------------------------------------------------------|
| MAXQ_K1       | Output from MAXQ2000        | JU_LED1  | Diagnostic indicator LED1                                                                           |
| MAXQ_K2       | Output from MAXQ2000        | JU_LED2  | Diagnostic indicator LED2                                                                           |
| MAXQ_K3       | Output from MAXQ2000        | JU_LED3  | Diagnostic indicator LED3                                                                           |
| MAXQ_K4       | Output from MAXQ2000        | JU_CNVTB | Convert-Start signal to MAX11301 CVNBT input                                                        |
| MAXQ_K5       | Interrupt input to MAXQ2000 | JU_INTB  | Active-low Interrupt from MAX11301 INTB output; can also be triggered by momentary pushbutton INT0. |
| MAXQ_K6       | Interrupt input to MAXQ2000 | -        | Active-low Interrupt from momentary pushbutton INT1                                                 |
| MAXQ_K7       | Interrupt input to MAXQ2000 | -        | Active-low Interrupt from momentary pushbutton INT2                                                 |
| MAXQ_K8       | Interrupt input to MAXQ2000 | -        | Active-low Interrupt from momentary pushbutton INT3                                                 |

## Table 7. Test Point Voltages

| TEST                         | VOLTAGE (V)   | VOLTAGE (V)   | VOLTAGE (V)   |
|------------------------------|---------------|---------------|---------------|
| POINT                        | NOMINAL       | MINIMUM       | MAXIMUM       |
| +3.3V TP142 from U2 MAX8511  | 3.3           | 3.267         | 3.333         |
| +2.5V TP132 from U7 MAX8511  | 2.5           | 2.475         | 2.52          |
| +5V from U8 MAX1659          | 5.0           | 4.85          | 5.15          |
| DVDD from U8 MAX1659         | 5.0           | 4.85          | 5.15          |
| ADC_INT_REF from U1 MAX11301 | 2.5           | 2.494         | 2.506         |
| ADC_EXT_REF from U6 MAX6071  | 2.5           | 2.4           | 2.6           |
| DAC_REF from U3 MAX6071      | 2.5           | 2.4           | 2.6           |

│

Figure 8a. MAX11301 EV Kit Schematic (Sheet 1 of 5)

<!-- image -->

## Evaluates: MAX11301

Figure 8b. MAX11301 EV Kit Schematic (Sheet 2 of 5)

<!-- image -->

## Evaluates: MAX11301

Figure 8c. MAX11301 EV Kit Schematic (Sheet 3 of 5)

<!-- image -->

Evaluates: MAX11301

Figure 8d. MAX11301 EV Kit Schematic (Sheet 4 of 5)

<!-- image -->

Evaluates: MAX11301

Figure 8e. MAX11301 EV Kit Schematic (Sheet 5 of 5)

<!-- image -->

## Evaluates: MAX11301

Figure 9. MAX11301 EV Kit Component Placement Guide-Component Side

<!-- image -->

Evaluates: MAX11301

Figure 10. MAX11301 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Evaluates: MAX11301

Figure 11. MAX11301 EV Kit PCB Layout-Component Side

<!-- image -->

│

## Evaluates: MAX11301

Figure 12. MAX11301 EV Kit PCB Layout-Ground Layer 2

<!-- image -->

## Evaluates: MAX11301

Figure 13. MAX11301 EV Kit PCB Layout-Power Layer 3

<!-- image -->

│

## Evaluates: MAX11301

Figure 14. MAX11301 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## Component List

Refer to the following file attached to this data sheet for component information:

- BOM\_MAX11301\_EVKIT\_REVA.csv

Evaluates: MAX11301

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11301EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX11301 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves tKe rigKt to cKange tKe circuitry and specifications witKout notice at any time.

│

Evaluates: MAX11301