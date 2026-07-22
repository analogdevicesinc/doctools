<!-- lastmod 2022-08-02 -->
## MAX2501 Evaluation Kit

## General Description

The MAX25201 evaluation kit (EV kit) is a fully assembled and tested application circuit that simplifies the evaluation of  the  MAX25201  400kHz,  36V  boost  controller.  All installed components  are  rated  for the automotive temperature range. Various test points and jumpers are included for evaluation.

The standard EV kit comes with the installed MAX25201 (24V,  400kHz)  and  can  also  be  used  to  evaluate  other MAX25201  variants  with  minimal  component  changes shown in the MAX25201 EV Kit Bill of Materials.

## Benefits and Features

- 4.5V to 42V Input Supply Range
- Input Voltage Range Extended down to 2V after Initial Startup
- Boost Output Voltages Adjustable Between 4.5V and 60V via External Resistors
- Boost Fixed Output Voltage Available with Minor Component Changes
- ±2% Output Voltage Accuracy
- Frequency-Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX250, MAX2501

## Quick Start

## Required Equipment

- MAX25201 EV kit
- 30V, 25A DC power supply (PS1)
- One voltmeter (VM1)
- One electronic load, 200W capable (EL1)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that all jumpers are in their default positions as shown in Table 1.
- 2) Preset the output voltage of PS1 to 14V. Disable PS1 output.
- 3) Turn off the EL1 and preset the load to 4A.
- 4) Connect the positive terminal of EL1 to OUT; connect the negative terminal of EL1 to GND2.
- 5) Connect the positive terminal of PS1 to the SUP; connect the negative terminal of PS1 to GND1.
- 6) Connect the positive terminal of VM1 to OUT; connect the negative terminal of VM1 to GND6.
- 7) Enable the power supply output.
- 8) Enable the electronic load EL1.
- 9) Verify that the voltmeter on OUT measures approximately 24V.

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                                                                   |
|----------|------------------|--------------------------------------------------------------------------------------------|
| J1       | 1-2              | Boost controller enabled                                                                   |
| J2       | 1-2              | FSYNC is pulled to V BIAS enabling FPWM mode                                               |
| J3       | Installed        | PGOOD is pulled up to V BIAS when OUT is in regulation                                     |
| J4       | 1-2              | OUT is shorted around the 20Ω resistor in the feedback network used for frequency analysis |

## Detailed Description

The  MAX25201  EV  kit  provides  a  fully  developed  and proven layout for evaluating all variants of the MAX2501 family  of  current-mode-controlled  boost  controller  ICs. The  controller  accepts  supply  voltages  as  high  as  36V and supply transients up to 40V.

## Switching Frequency and External Synchronization

The IC can operate in two modes: forced-PWM or skip mode. Skip mode offers improved efficiency over PWM during light-load conditions. When FSYNC is pulled low, the device operates in skip mode for light loads, and in PWM mode for larger loads. When FSYNC is pulled high, the  device  is  forced  to  operate  in  PWM  across  all  load conditions.

The FSYNC pin can be used to synchronize the switching frequency  of  the  IC  to  an  external  clock  source  by applying an external clock signal ranging from 220kHz to 2.2MHz. The device is forced to operate in PWM mode when FSYNC is connected to a clock source.

## Boost Output Monitoring (PGOOD)

The  EV  kit  provides  an  output  test  point  (PGOOD)  to monitor the status of the boost output voltage at OUT. The PGOOD pin goes to a state of high impedance and pulls high through a pullup resistor when the respective boost output  voltage  rises  above  94.5%  (typ)  of  its  regulation voltage.  PGOOD  pulls  low  when  the  respective  output

## Ordering Information

| PART           | TYPE              |
|----------------|-------------------|
| MAX25201EVKIT# | 24V/400kHz EV Kit |

#Denotes RoHS compliant.

voltage drops below 92.5% (typ) of its nominal regulated voltage.

To  obtain  logic  signals,  pull  up  PGOOD  to  BIAS  by installing the shunt on jumper J3.

The  EV  kit  also  provides  an  LED  to  monitor  PGOOD visually.  The  LED  illuminates  when  PGOOD  is  low, implying the converter has fallen out of regulation.

## Setting the Output Voltage in the Boost Converter

The EV kit comes assembled to provide 24V regulation on OUT. To adjust the output voltage, remove and replace appropriate resistors in positions R9 and R10 according to the following equation:

<!-- formula-not-decoded -->

where V FB = 1V (typ) and R10 = 5kΩ.

## Evaluating Other Variants

The MAX25201EVKIT# comes installed with the synchronous boost variant (MAX25201ATEA/VY+).

Maxim  Integrated  offers  additional  variations  of  the MAX25201  that  include  spread-spectrum  options.  See the MAX25201 IC Datasheet for part variant details and contact the factory to request any additional variants.

See  the  MAX25201  EV  Kit  Bill  of  Materials  to  select components for  evaluating  higher  frequency  configurations.

│

## MAX25201 EV Kit Bill of Materials

| DESIGNATION           |   QTY | DESCRIPTION                                              | MFG PART #                             |
|-----------------------|-------|----------------------------------------------------------|----------------------------------------|
| C1, C2, C26, C27, C29 |     5 | 120uF ±20%, 50V Aluminum electrolytic capacitor (CASE_G) | PANASONIC EEH-ZC1H121P                 |
| C3, C4                |     2 | 4.7uF206 ±10%, 50V X7R ceramic capacitor (1)             | TDK CGA5L3X7R1H475K160AB               |
| C6                    |     1 | 2.2uF ±10%, 50V X7R ceramic capacitor (0805)             | TDK CGA4J3X7R1H225K125AB               |
| C8                    |     1 | 0.022uF ±10%, 100V X7R ceramic capacitor (0603)          | TDK CGA3E2X7R2A223K080AA               |
| C9                    |     1 | 0.1uF ±10%, 100V X7S ceramic capacitor (0603)            | TDK CGA3E3X7S2A104K080AB               |
| C10                   |     1 | 0.047uF ±10%, 50V X7R ceramic capcitor (0603)            | MURATA GCM188R71H473KA55               |
| C11, C12              |     2 | 10uF ±10%, 50V X7S ceramic capacitor (1210)              | TDK CGA6P3X7S1H106K250AB               |
| C22                   |     1 | 0.1uF ±20%, 16V X7R ceramic capacitor (0402)             | TDK CGA2B1X7R1C104K050BC               |
| D2                    |     1 | Diode, 75V, 0.3A (SOD-323)                               | DIODES INCORPORATED 1N4148WS-7         |
| DS1                   |     1 | LED Red, VF=2V,IF=0.025A (SMT)                           | LITE-ON ELECTRONICS INC. LTST-C190KRKT |
| L1                    |     1 | 2.2uH ±20%, 20A composite inductor                       | COILCRAFT XAL1010-222ME                |
| Q1, Q2, Q3            |     3 | N-Channel FET, 60V, 71A, 61W, (SO-8FL)                   | ON SEMICONDUCTOR NVMFS5C670NLWFAFT1G   |
| R1                    |     1 | 0.0015 OHM ±5%, 2W metal film resistor (2512)            | ROHM SEMICONDUCTOR PML100HZPJV1L5      |
| R2                    |     1 | 91k OHM ± 1%; thick film resistor (0603)                 | VISHAY DALE CRCW060391K0FK             |
| R3, R4, R11, R13      |     4 | 0 OHM ± 0%; thick film resistor (0603)                   | VISHAY DALE CRCW06030000ZS             |
| R5                    |     1 | 71.5k OHM ±1%, thick film resistor (0603)                | YAGEO PHYCOMP RC0603FR-0771K5L         |
| R7                    |     1 | 1k OHM ±1%, thick film resistor (0603)                   | VISHAY DALE CRCW06031K00FK             |
| R8                    |     1 | 10k OHM ±1%, thick film resistor (0603)                  | VISHAY DALE CRCW060310K0FK             |
| R9                    |     1 | 115kΩ ± 1%, thick film resistor (0603)                   | VISHAY CRCW0603115KFK                  |
| R10                   |     1 | 4.99kΩ ± 1%, thick film resistor (0603)                  | VISHAY DALE CRCW06034K99FK             |
| R14                   |     1 | 20kΩ ± 1%, thick film resistor (0603)                    | VISHAY DALE CRCW060320R0FK             |
| U1                    |     1 | 36V Synchronous Boost Controller                         | MAX25201ATEA/VY+                       |
| -                     |     1 | PCB: MAX25201 Evaluation Kit                             |                                        |

|                              |     | CHANGES FOR 8V, 2.1MHz                                   |                                  |
|------------------------------|-----|----------------------------------------------------------|----------------------------------|
| DESIGNATION                  | QTY | DESCRIPTION                                              | MFG PART #                       |
| C1                           | 0   | Not Installed                                            |                                  |
| C2                           | 1   | 100uF ±20%, 50V Aluminum electrolytic capacitor (CASE_G) | PANASONIC EEE-FP1H101AP          |
| C5, C19                      | 2   | 0.015uF ±10%, 50V X7R ceramic capacitor (0603)           | GCM188R71H153KA37                |
| C8, C18                      | 2   | 4700pF ±5%, 25V C0G ceramic capacitor (0603)             | TDK C1608C0G1E472J080AA          |
| C11, C12, C13, C14, C15, C16 | 6   | 10uF ±10%, 50V X7S ceramic capacitor (1210)              | TDK CGA6P3X7S1H106K250AB         |
| L1                           | 1   | 0.47uH ±20% Composite Inductor                           | WURTH ELECTRONICS INC. 744314047 |
| R1                           | 1   | 0.003Ω± 1%, 3W, metal foil resistor (2512)               | SUSUMU CO LTD. KRL6432E-M-R003-F |
| R2                           | 1   | 14.7kΩ± 1%, thick film resistor (0603)                   | VISHAY DALE CRCW060314K7FK       |
| R3, R4, R11, R13             | 1   | 1.05Ω± 1%, thick film resistor (0603)                    | VISHAY DALE CRCW06031R05FKEA     |
| R5                           | 1   | 12.1KΩ± 1%, thick film resistor (0603)                   | VISHAY DALE CRCW06031212FK       |
| R9                           | 1   | 34.8kΩ ± 1%, thick film resistor (0603)                  | PANASONIC ERJ-3EKF3482           |

|             |     | CHANGES FOR MAX25200               |                         |
|-------------|-----|------------------------------------|-------------------------|
| DESIGNATION | QTY | DESCRIPTION                        | MFG PART #              |
| Q2          | 0   | Not Installed                      |                         |
| D3          | 1   | Schottky Diode, 60V, 10A (SOT1289) | Nexperia PMEG060V100EPD |
| U1          | 1   | 36V Asynchronous Boost Controller  | MAX25200ATEA/VY+        |

## MAX25201 EV Kit Schematic

<!-- image -->

## MAX25201 EV PCB Layouts

MAX25201 EV Kit Silkscreen Top

<!-- image -->

MAX25201 EV Kit Mask Top

<!-- image -->

MAX25201 EV Kit Component Placement - Top

<!-- image -->

MAX25201 EV Kit PCB Layout - Internal Layer 2

<!-- image -->

│

## MAX25201 EV PCB Layouts (continued)

MAX25201 EV Kit PCB Layout - Internal Layer 3

<!-- image -->

MAX25201 EV Kit Component Placement - Bottom

<!-- image -->

MAX25201 EV Kit Mask Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX25200, MAX25201