<!-- lastmod 2022-08-03 -->
## MAX11300 Evaluation Kit

## General Description

The MAX11300 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX11300  20-port  programmable  mixed-signal  I/O  with  12-bit  ADC,  12-bit  DAC, analog  switches,  and  GPIO.  The  EV  kit  also  includes Windows  XP ® -,  Windows  Vista ® -,  Windows ®   7-,  and Windows  8.0-/8.1-compatible  software  that  provides  a simple  graphical  user  interface  (GUI)  for  exercising  the features of the IC.

The EV kit comes with a MAX11300GTL+ installed.

## Features and Benefits

- 20 PIXI TM  Ports for Analog or Digital Control or Sensing
- Two External Temperature Sensors (2N3904)
- 50-Pin Signal Header (20 Ports, Two Temperatures, and Power Supplies)
- SPI Interface Terminals
- Optional 2.5V On-Board Reference (MAX6071)
- Windows XP-, Windows Vista-, Windows 7-, and Windows 8.0-/8.1-Compatible Software
- USB-PC Connection (Cable Included)
- RoHS Compliant
- Proven Four-Layer PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

PIXI is a trademark of Maxim Integrated Products, Inc.

Note: Active-low pin names such as INT are shown in the software and PCB layout with a B suffix (e.g., INTB).

Evaluates: MAX11300

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
- 2) Install the EV kit software and USB driver on your computer by running the MAX11300EVKitSetupV1.0.exe program  inside  the  temporary  folder.  The  program files are copied to your PC and icons are created in the  Windows Start  |  Programs menu.  During  software  installation,  some  versions  of  Windows  may show a warning message indicating that this software is  from  an  unknown  publisher.  This  is  not  an  error condition  and  it  is  safe  to  proceed  with  installation. Administrator  privileges  are  required  to  install  the USB device driver on Windows. Note: The software requires .NET Framework v4. If this framework is not detected  during  installation,  the  installer  launches dotNetFx40\_Full\_setup.exe  to  install  it.  Internet  access may be required to install the .NET Framework v4 if it is not already installed.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1, Table 2, Table 3, and Table 4.
- 4) Configure  the  power  supply  for  ±12.5V  DC  output (typical load current is 50mA) (be sure to keep AVDDIO-AVSSIO within rated supply range).

<!-- image -->

## MAX11300 Evaluation Kit

- 5) Connect  the  +12.5V  DC  power  supply  between AVDDIO  (+)  and  GND  (-).  Connect  the  -12.5V  DC power supply between AVSSIO (-) and GND (+).
- 6) Connect the DVM- to GND (-)
- 7) Enable the power-supply output.
- 8) Connect  the  USB  cable  from  the  PC  to  the  EV  kit board. A Windows message appears when connecting the EV kit board to the PC for the first time. Each version of Windows has a slightly different message. If  you  see  a  Windows  message  stating Ready  to Use ,  proceed to the next step. Otherwise, open the USB\_Driver\_Help\_200.PDF  document  in  the  Windows Start | Programs menu to verify that the USB driver was installed successfully.
- 9) Use the DVM+ to verify the test point voltages shown in Table 2.
- 10)  Start the MAX11300 Configuration Software by opening its icon in the Windows Start | Programs menu.

The MAX11300 configuration software main window appears, as shown in Figure 1. Drag and drop components into the device, wire them up, and then use the File menu  | Generate  Registers to  export  the configuration to Max11300Register.csv.

- 11)  Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start  |  Programs menu. The EV kit software main window appears, as shown in Figure 2.
- 12)  Select File menu | Load Configuration... | MAX11300Register.csv to  load  the  configuration into  the  MAX11300.  Alternatively,  use  one  of  the prebuilt demo configurations, such as MAX11300Reg-ister\_20131115\_1505.csv,  which  configures  all  20 PIXI ports with different configurations.
- 13)  Select  the Chart tab,  then  check Options menu  | Polling to show the analog inputs on a graph. Select the Data tab to see the low-level input code values in hexadecimal.

Figure 1. MAX11300 EV Kit Configuration Software

<!-- image -->

│

## Detailed Description of EV Kit Software

The Device  Configuration tab  (Figure  2)  accesses the  global  device  control  registers,  interrupt  sources,

Evaluates: MAX11300

temperature  limits,  DAC  presets,  and  ADC  conversion rate. Changing the controls on the GUI writes the corresponding registers immediately.

Figure 2. Device Configuration Tab

<!-- image -->

│

Figure 3. Data Tab

<!-- image -->

## MAX11300 Evaluation Kit

The Data tab  (Figure  3)  presents  a  tabular  display  of all  PIXI  ports  and  temperature  channels.  Double-click in  the Configured As cells  to  jump  directly  to  the Pin Configuration tab  (Figure  5)  for  the  corresponding  pin. Each row represents one of the PIXI ports or one of the temperature  sensors.  Some  configurations  enable DAC

Evaluates: MAX11300

Out or GPO Out controls,  or  provide ADC or GPI input values.  Pins  configured  for  GPI  input  can  be  used  as interrupt sources by double-clicking in the Interrupt cell.

Select  the Chart tab  (Figure  4),  then  check Options menu | Polling to show the analog inputs on a graph.

Figure 4. Chart Tab

<!-- image -->

│

## MAX11300 Evaluation Kit

The PIXI ports can be viewed and manually adjusted from the Pin  Configuration tab.  Selecting  the  pin  function affects the choices in the other four fields. The software does not attempt to validate the configuration.

The normal development flow is to start in the MAX11300 Configuration  software,  use  its Generate  Registers menu item to export the registers to a *.csv file, then use the EV kit software to connect to the hardware and load that *.csv file.

## Evaluates: MAX11300

The  GPIO1-GPIO3  pins  are  spare  outputs  from  the MAXQ2000 microcontroller that can be optionally used to support external diagnostic testing. They are not part of the MAX11300.

The supply voltages are used to help validate the available  operating  ranges,  but  the  software  has  no  way  to independently verify that the nominal values are actually present.

Figure 5. Pin Configuration Tab

<!-- image -->

│

## MAX11300 Evaluation Kit

The Registers tab (Figure 6) provides a tabular display of all registers of the device, supporting low-level read and write operations in hexadecimal. Write is effective by the

Write button.  Refer  to  the  MAX11300  IC  data  sheet  for the meaning and format of the various registers.

The History tab provides a diagnostic log of the commands sent to the EV kit.

Figure 6. Registers Tab

<!-- image -->

## Detailed Description of Hardware

The  MAX11300  EV  kit  uses  an  on-board  MAXQ2000 microcontroller  (U120)  to  send  SPI  commands  to  the device.  On-board  level  translators  (U101,  U102,  and U105) convert from 3.3V to 5V levels. On-board MAX6071 voltage  references  (U3,  U6)  provide  ADC  and  DAC reference voltages. Remote temperature sensing can be simulated by on-board 3904 npn transistors (D0, D1). See Figure 7.

## Connecting to User-Supplied Circuitry

The  EV  kit  connects  to  external,  user-supplied  circuitry through  header  J1  or  J2.  These  two  headers  have  the same signals; J1 is for vertical 50-pin ribbon-cable connection and J2 is for right-angle connection to a sideboard by standard 0.100in right-angle pins.

If  remote  temperature  sensing  is  used,  disconnect  onboard npn transistors D0 and D1 by moving the shunts of JUD0P, JUD0N, JUD1P, and J1D1N to the 1-4 position.

Figure 7. MAX11300 EV Kit Hardware Overview

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
| JU_SDA_DIN  |          | 1-2**            | SDA_DIN = MAXQ_MOSI (SPI interface mode)          |
| JU_SDA_DIN  | SDA_DIN  | 2-3              | SDA_DIN = MAXQ_SDA(reserved)                      |
| JU_SDA_DIN  |          | No Shunt         | SDA_DIN = User-supplied connection                |
| JU_SDA      | SDA      | 1-2              | SDApullup to DVDD by R103 (reserved)              |
| JU_SDA      | SDA      | No Shunt*        | R103 is not connected (SPI interface mode)        |
| JU_SCL_SCLK |          | 1-2**            | SCL_SCLK = MAXQ_SCLK (SPI interface mode)         |
| JU_SCL_SCLK | SCL_SCLK | 2-3              | SCL_SCLK = MAXQ_SCL (reserved)                    |
| JU_SCL_SCLK |          | No Shunt         | SCL_SCLK = User-supplied connection               |
| JU_SCL      | SCL      | 1-2              | SCL pullup to DVDD by R104 (reserved)             |
| JU_SCL      | SCL      | No Shunt*        | R104 is not connected (SPI interface mode)        |
| JU_AD0_CSB  |          | 1-2**            | AD0/CSB = MAXQ_CS (SPI interface mode)            |
| JU_AD0_CSB  |          | 3-4              | AD0/CSB = DVDD (reserved)                         |
| JU_AD0_CSB  | AD0/CSB  | 5-6              | AD0/CSB = SCL_SCLK (reserved)                     |
| JU_AD0_CSB  |          | 7-8              | AD0/CSB = SDA_DIN (reserved)                      |
| JU_AD0_CSB  |          | 9-10             | AD0/CSB = DGND. (reserved)                        |
| JU_AD1_DOUT |          | 1-2              | AD1/DOUT = DGND (reserved)                        |
| JU_AD1_DOUT | AD1/DOUT | 1-3**            | AD1/DOUT = MAXQ_MOSI.(SPI interface mode)         |
| JU_AD1_DOUT |          | 1-4              | AD1/DOUT = DVDD (reserved)                        |
| JU_INTB     | INTB     | 1-2**            | INTB = MAXQ_K5 interrupt input to microcontroller |
| JU_INTB     | INTB     | Open             | INTB = user-supplied connection                   |
| JU_CNVTB    | CNVTB    | 1-2**            | CNVTB = MAXQ_K4 output from microcontroller       |
| JU_CNVTB    | CNVTB    | Open             | CNVTB = user-supplied connection                  |

Evaluates: MAX11300

│

Table 3. MAX11300EVKIT Jumper Configuration (Temperature Sensor)

| JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                                                                               |
|----------|----------|------------------|-----------------------------------------------------------------------------------------------------------|
| JUD0P    | D0P      | 1-2              | 10Ω resistor RD0P emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD0P    | D0P      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD0P    | D0P      | 1-4              | Connect external temperature sense diode junction to D0P_ext / D0N_ext pair on header J1, J2, or J3       |
| JUD0N    | D0N      | 1-2              | 10Ω resistor RD0N emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD0N    | D0N      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD0N    | D0N      | 1-4              | Connect external temperature sense diode junction to D0P_ext / D0N_ext pair on header J1, J2, or J3       |
| JUD1P    | D1P      | 1-2              | 10Ω resistor RD1P emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD1P    | D1P      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD1P    | D1P      | 1-4              | Connect external temperature sense diode junction to D1P_ext / D1N_ext pair on header J1, J2, or J3       |
| JUD1N    | D1N      | 1-2              | 10Ω resistor RD1N emulates long connection wire series resistance, using on-board MMBT3904 as temp sensor |
| JUD1N    | D1N      | 1-3*             | Direct connection to on-board MMBT3904 used as temp sensor                                                |
| JUD1N    | D1N      | 1-4              | Connect external temperature sense diode junction to D1P_ext / D1N_ext pair on header J1, J2, or J3       |

* Default position.

## Table 4. MAX11300EVKIT Jumper Configuration (On-Board External References)

| JUMPER      | SIGNAL      | SHUNT POSITION   | DESCRIPTION                                                            |
|-------------|-------------|------------------|------------------------------------------------------------------------|
| JU_ADC_REF  | ADC_EXT_REF | 1-2*             | On-board MAX6071 reference U2 drives ADC_EXT_REF                       |
| JU_ADC_REF  | ADC_EXT_REF | Open             | On-board MAX6071 reference U2 is disconnected from ADC_EXT_REF         |
| JU_DAC_REF  | DAC_REF     | 1-2*             | On-board MAX6071 reference U3 drives DAC_REF (Kelvin connection force) |
| JU_DAC_REF  | DAC_REF     | Open             | On-board MAX6071 reference U3 is disconnected from DAC_REF             |
| JU_DAC_REFS | DAC_REFS    | 1-2*             | On-board MAX6071 reference U3 drives DAC_REF (Kelvin connection sense) |
| JU_DAC_REFS | DAC_REFS    | Open             | On-board MAX6071 reference U3 is disconnected from DAC_REF             |

│

Evaluates: MAX11300

## Table 5. MAX11300EVKIT Jumper Configuration (Microcontroller)

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
| MAXQ_K4       | Output from MAXQ2000        | JU_CNVTB | Convert-Start signal to MAX11300 CVNBT input                                                        |
| MAXQ_K5       | Interrupt input to MAXQ2000 | JU_INTB  | Active-low Interrupt from MAX11300 INTB output; can also be triggered by momentary pushbutton INT0. |
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
| ADC_INT_REF from U1 MAX11300 | 2.5           | 2.494         | 2.506         |
| ADC_EXT_REF from U6 MAX6071  | 2.5           | 2.4           | 2.6           |
| DAC_REF from U3 MAX6071      | 2.5           | 2.4           | 2.6           |

│

## Evaluates: MAX11300

Figure 8a. MAX11300 EV Kit Schematic (Sheet 1 of 5)

<!-- image -->

## Evaluates: MAX11300

Figure 8b. MAX11300 EV Kit Schematic (Sheet 2 of 5)

<!-- image -->

│

## Evaluates: MAX11300

Figure 8c. MAX11300 EV Kit Schematic (Sheet 3 of 5)

<!-- image -->

## Evaluates: MAX11300

Figure 8d. MAX11300 EV Kit Schematic (Sheet 4 of 5)

<!-- image -->

## Evaluates: MAX11300

Figure 8e. MAX11300 EV Kit Schematic (Sheet 5 of 5)

<!-- image -->

│

## Evaluates: MAX11300

Figure 9. MAX11300 EV Kit Component Placement Guide-Component Side

<!-- image -->

Evaluates: MAX11300

Figure 10. MAX11300 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Evaluates: MAX11300

Figure 11. MAX11300 EV Kit PCB Layout-Component Side

<!-- image -->

│

Evaluates: MAX11300

Figure 12. MAX11300 EV Kit PCB Layout-Ground Layer 2

<!-- image -->

│

## Evaluates: MAX11300

Figure 13. MAX11300 EV Kit PCB Layout-Power Layer 3

<!-- image -->

│

## Evaluates: MAX11300

Figure 14. MAX11300 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## Component List

Click on the link below for component information:

- MAX11300 BOM

Evaluates: MAX11300

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11300EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX11300 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION       | PAGES CHANGED   |
|-------------------|-----------------|-------------------|-----------------|
|                 0 | 5/14            | Initial release   | -               |
|                 1 | 1/15            | Replaced Figure 1 | 2               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves tKe rigKt to cKange tKe circuitry and specifications witKout notice at any time.

│

Evaluates: MAX11300

TITLE: Bill of Materials DATE: 03/20/2014 DESIGN: max11300\_evkit\_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp\_loc\hw\_cardcat\allegrolib\site\cdssetup\BOM\_Templates\evkit\_build\_template.bom CALLOUT: VARIANT: openvariant

Revision\_Type : PRODUCTION

<!-- image -->

|   ITEM |   QTY | REF DES                                                                                                 | Var Status   | MAXINV           | MFG PART #        | MANUFACTURER   | VALUE   | DESCRIPTION                                                                                                                                                                 | COMMENTS   |
|--------|-------|---------------------------------------------------------------------------------------------------------|--------------|------------------|-------------------|----------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 |     3 | +5V, AVDD, DVDD                                                                                         | Pref         | 02-TPMINI5000-00 | 5000              | ?              | N/A     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |            |
|      2 |    10 | ACB0-ACB9                                                                                               | Pref         | N/A              | N/A               | ?              | N/A     | TEST POINT; PAD DIA=0.06IN                                                                                                                                                  |            |
|      3 |     3 | DAC_REF, ADC_EXT_REF, ADC_INT_REF                                                                       | Pref         | 02-TPMINI5002-00 | 5002              | ?              | N/A     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                     |            |
|      4 |    25 | C1, C2, C5, C6, C9, C12-C15, C17-C20, C22, C23, C25, C26, C28, C31, C32, C114, C133, C141, CAVDD, CDVDD | Pref         | 20-000U1-B8      | N/A               | ?              | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FORNEW DESIGN- USE 20-000u1-04A               |            |
|      5 |     9 | C3, C27, C30, C37, C38, C40, C41, CVDDIO, CVSSIO                                                        | Pref         | 20-0010U-S6      | GRM21BR71A106KE51 | ?              | 10UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                 |            |

<!-- image -->

|   6 | C4, C21, C24, C29, C34, C35, C39, C43-C46   | Pref   | 20-0001U-63   | N/A   | ?   | 1UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                             |   11 |
|-----|---------------------------------------------|--------|---------------|-------|-----|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
|   7 | C7                                          | Pref   | 20-00U01-B19  | N/A   | ?   | 0.01UF | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                          |    1 |
|   8 | C8, C16, C109-C111                          | Pref   | 20-004U7-X3   | N/A   | ?   | 4.7UF  | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                        |    5 |
|   9 | C10, C11                                    | Pref   | 20-0027P-27   | N/A   | ?   | 27PF   | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                                     |    2 |
|  10 | C33, C36, C121, C122                        | Pref   | 20-000U1-03   | N/A   | ?   | 0.1UF  | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC; NOT RECOMMENDED FORNEW DESIGN USE - 20-000u1- 01 |    4 |
|  11 | C112, C119                                  | Pref   | 20-0390P-E4   | N/A   | ?   | 390PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 390PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+                                                         |    2 |
|  12 | C123, C124                                  | Pref   | 20-0010P-25   | N/A   | ?   | 10PF   | CAPACITOR; SMT; 0603; CERAMIC; 10pF; 50V; 5%; C0G; -55degC to + 125degC, USE 20-0010p-E4 FOR NEW DESIGN                                                      |    2 |

<!-- image -->

<!-- image -->

|   21 | 1 J1                                                               | Pref                   | 01-PEC25DAAN50P-21    | PEC25DAAN         | SULLINS ELECTRONICS CORP.   | PEC25DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 50PINS; -65 DEGC TO +125 DEGC   |    |
|------|--------------------------------------------------------------------|------------------------|-----------------------|-------------------|-----------------------------|-------------------|-------------------------------------------------------------------------------------|----|
|   22 | 1 J2                                                               | Pref                   | 01-SSW12502SDRA50P-17 | SSW-125-02-S-D-RA | SAMTEC                      | SSW-125-02-S-D-RA | CONNECTOR; FEMALE; THROUGH HOLE; SQ POST SOCKET; RIGHT ANGLE; 50PINS                |    |
|   23 | 1 JTAG                                                             | Pref                   | 01-PEC05DAAN10P-21    | PEC05DAAN         | SULLINS ELECTRONICS CORP.   | PEC05DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC   |    |
|   24 | 4 JUD0N, JUD0P, JUD1N, JUD1P                                       | Pref                   | 01-222840434P-21      | 22-28-4043        | MOLEX                       | 22-28-4043        | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS             |    |
|   25 | JU_LED1-JU_LED3, JU_ADC_REF, JU_DAC_REF, JU_DAC_REFS, JU_VSSIO_GND | Pref                   | 01-PEC02SAAN2P-21     | PEC02SAAN         | SULLINS                     | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC    |  7 |
|   26 | 2 JU_AVDD, JU_DVDD                                                 | Pref 01-PEC03SAAN3P-21 |                       | PEC03SAAN         | SULLINS                     | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC    |    |
|   27 | 1 Q1                                                               | Pref 90-IRLML6402-16   |                       | IRLML6402         | INTERNATIONAL RECTIFIER     | IRLML6402         | TRAN; HEXFET POWER MOSFET; PCH; SOT-23; PD-(1.3W); I-(-3.7A); V- (-20V)             |    |
|   28 | 3 R1, R2, R11                                                      | Pref 80-0100K-24       |                       | N/A               | ?                           | 100K              | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                 |    |
|   29 | 28 R3, R12, R15, R18-R20, R32-R43, R48- R57                        | Pref 80-0000R-27A      |                       | N/A               | ?                           | 0                 | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                |    |
|   30 | 2 R4, R29                                                          | Pref 80-0010K-24       | N/A                   |                   | ?                           | 10K               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                  |    |
|   31 | 11 R5, R6, R13, R14, R46, R47, RD0N, RD0P, RD1N, RD1P, RAVDD       | Pref 80-0010R-24       |                       | N/A               | ?                           | 10                | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                               |    |

<!-- image -->

|   32 | 2 R7, R10                        | Pref   | 80-0002K-24      | N/A          | ?     | 2K           | RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                   |              |
|------|----------------------------------|--------|------------------|--------------|-------|--------------|---------------------------------------------------------------------------------------------------------|--------------|
|   33 | 1 R8                             | Pref   | 80-0012K-24      | N/A          | ?     | 12K          | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                  |              |
|   34 | 3 R9, R44, R45                   | Pref   | 80-0470R-24      | N/A          | ?     | 470          | RESISTOR, 0603, 470 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                  |              |
|   35 | 2 R16, R17                       | Pref   | 80-001K6-53      | N/A          | ?     | 1.6K         | RESISTOR; 0603; 1.6K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                 |              |
|   36 | 1 R23                            | Pref   | 80-003K3-24      | N/A          | ?     | 3.3K         | RESISTOR, 0603, 3.3K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                 |              |
|   37 | 6 R24-R28, R58                   | Pref   | 80-0000R-27      | N/A          | ?     | 0            | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                    |              |
|   38 | 1 R30                            | Pref   | 80-0015K-24      | N/A          | ?     | 15K          | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                   |              |
|   39 | 1 R31                            | Pref   | 80-0020K-23      | N/A          | ?     | 20K          | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                 |              |
|   40 | 3 R103, R104, R107               | Pref   | 80-004K7-19      | N/A          | ?     | 4.7K         | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                     |              |
|   41 | 1 RUBBER_BUMPS                   | Pref   | N/A              | SJ-5007      | 3M    | SJ-5007      | EVKIT BUMPERS; SQUARE TAPERED; WHITE-SET TO OBSOLETE; PLEASE USE 02-SJ5007-09                           |              |
|   42 | 12 SU1, SU2, SU7-SU13, SU15-SU17 | Pref   | 02-JMPFS1100B-00 | SX1100-B     | KYCON | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED |              |
|   43 | 1 U1                             | Pref   | MAX11300GTL+     | MAX11300GTL+ | MAXIM | MAX11300GTL+ | EVKIT PART - IC; MAX11300GTL+; PACKAGE CODE T4066-3                                                     | MAX11300GTL+ |

<!-- image -->

|   44 | 1 U2         | Pref   | MAX8511EXK33+            | MAX8511EXK33+     | MAXIM                               | MAX8511EXK33      | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC   | MAX8511EXK33+   |
|------|--------------|--------|--------------------------|-------------------|-------------------------------------|-------------------|------------------------------------------------------------------------------------------------------|-----------------|
|   45 | 2 U3, U6     | Pref   | MAX6071AAUT25+           | MAX6071AAUT25+    | MAXIM                               | MAX6071AAUT25+    | IC; VREF; LOW NOISE; HIGH- PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                               | MAX6071AAUT25+  |
|   46 | 1 U4         | Pref   | MAX6389LT31D3+           | MAX6389LT31D3+    | MAXIM                               | MAX6389LT31D3+    | IC; UP; DUAL LOW-VOLTAGE; LOW- POWER UP RESET CIRCUIT; UDFN6                                         | MAX6389LT31D3+  |
|   47 | 1 U7         | Pref   | MAX8511EXK25+            | MAX8511EXK25+     | MAXIM                               | MAX8511EXK25-T    | IC; VREG; ULTRA-LOW-NOISE HIGH PSRR LOW-DROPOUT LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC      | MAX8511EXK25+   |
|   48 | 1 U8         | Pref   | MAX1659ESA               | MAX1659ESA        | MAXIM                               | MAX1659ESA        | IC; VREG; LOW-DROPOUT LINEAR REGULATOR; NSOIC8                                                       | MAX1659ESA      |
|   49 | 2 U101, U102 | Pref   | 10-ISO7640FMDW-W         | ISO7640FMDW       | TEXAS INSTRUMENTS                   | ISO7640FMDW       | IC; DISO; LOW POWER QUAD CHANNELS DIGITAL ISOLATOR; WSOIC16 300MIL                                   |                 |
|   50 | 1 U105       | Pref   | MAX14591ETA+             | MAX14591ETA+      | MAXIM                               | MAX14591ETA+      | IC; TRANS; HIGH-SPEED; OPEN- DRAIN CAPABLE LOGIC-LEVEL TRANSLATOR; TDFN8                             | MAX14591ETA+    |
|   51 | 1 U120       | Pref   | MAXQ2000-RAX+            | MAXQ2000-RAX+     | MAXIM                               | MAXQ2000-RAX      | IC, CTRL, LOW-POWER LCD MICROCONTROLLER, QFN68                                                       | MAXQ2000-RAX+   |
|   52 | 1 U200       | Pref   | 10-FT232HL-C             | FT232HL           | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232HL           | IC; INFC; SINGLE CHANNEL HI-SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP48                              |                 |
|   53 | 1 USB1       | Pref   | 01-10033526N3212MLF5P-26 | 10033526-N3212MLF | FCI CONNECT                         | 10033526-N3212MLF | CONNECTOR; FEMALE; SMT; MINI USB B-TYPE SMT RECEPTACLE; RIGHT ANGLE; 5PINS                           |                 |

<!-- image -->

| 54              | 2 VDDIO, VSSIO                   | Pref            | 02-TPMINI5004-00   | 5004            | ?                        | N/A                      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST   |                 |                 |
|-----------------|----------------------------------|-----------------|--------------------|-----------------|--------------------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------------|
| 55              | 1 Y1                             | Pref            | 60-0012M-12B       | ATS12ASM-1E     | CTS                      | 12MHZ                    | CRYSTAL; SMT ; ATS SERIES; 12PF; 12MHZ; +/-30PPM; +/-50PPM; -40 DEGC TO +85 DEGC                                                                                                 |                 |                 |
| 56              | 1 Y120                           | Pref            | 60-0020M-24A       | ECS-200-20-3X   | ECS INC.                 | 20MHZ                    | CRYSTAL; SMT ; CSM-3X SERIES; 20PF; 20MHZ; +/-30PPM; +/- 50PPM; -10 DEGC TO +70 DEGC                                                                                             |                 |                 |
| 57              | 1                                | Pref            | EPCB11300          | EPCB11300       | MAXIM                    | PCB                      | PCB: EPCB11300                                                                                                                                                                   |                 |                 |
| TOTAL           | 212                              |                 |                    |                 |                          |                          |                                                                                                                                                                                  |                 |                 |
| DO NOT PURCHASE | DO NOT PURCHASE                  | DO NOT PURCHASE | DO NOT PURCHASE    | DO NOT PURCHASE | DO NOT PURCHASE          | DO NOT PURCHASE          | DO NOT PURCHASE                                                                                                                                                                  | DO NOT PURCHASE | DO NOT PURCHASE |
| ITEM            | QTY REF DES                      | Var Status      | MAXINV             | MFG PART #      | MANUFACTURER VALUE       | MANUFACTURER VALUE       | DESCRIPTION                                                                                                                                                                      | COMMENTS        |                 |
| 1               | 1 JU_AD0_CSB                     | DNI             | 01-PEC05DAAN10P-21 | PEC05DAAN       | SULLINS ELECTROPEC05DAAN | SULLINS ELECTROPEC05DAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                                                                                |                 |                 |
| 2               | 1 JU_AD1_DOUT                    | DNI             | 01-222840434P-21   | 22-28-4043      | MOLEX                    | 22-28-4043               | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                                                                                          |                 |                 |
| 3               | 6 JU_INTB, JU_CNVTB, JU_U1_AVDD, | DNI             | 01-PEC02SAAN2P-21  | PEC02SAAN       | SULLINS                  | PEC02SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC                                                                                                 | DNB             |                 |
| 4               | 2 JU_SCL, JU_SDA                 | DNI             | 01-PEC02SAAN2P-21  | PEC02SAAN       | SULLINS                  | PEC02SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC                                                                                                 |                 |                 |

<!-- image -->