<!-- lastmod 2023-08-18 -->
<!-- image -->

## Evaluate: MAX17570B/MAX17570E Converters

## General Description

The  MAX17570B/MAX17570E  evaluation  kits  (EV  kits) provide proven designs to evaluate the performance of the MAX17570B/MAX17570E  high-voltage, high-efficiency, synchronous step-down DC-DC converters. The MAX17570B/MAX17570E EV kits operate over a 6.5V to 60V input range and can deliver up to 300mA at a fixed 5V output.  The  MAX17570B  operates  in  PWM  mode  at  all loads and the MAX17570E operates in PFM mode at light loads.

The EV kits feature an adjustable input undervoltage lockout  (UVLO),  open-drain RESET ,  overcurrent  protection, external frequency synchronization, and thermal shutdown.  The  MAX17570  IC  data  sheet  provides  a complete  description  of  the  part  and  should  be  read  in conjunction  with  this  EV  kit  data  sheet  before  operating these EV kits.

## Features and Benefits

- Operates up to 60V Input Supply
- Fixed 5V PWM and PFM Application Circuits
- Up to 300mA Load Current
- 400kHz Switching Frequency
- Enable/UVLO  Input,  Resistor-Programmable  UVLO Threshold
- Open-Drain RESET Output
- Provision  to  Synchronize  the  MAX17570B  to  the External Clock Source
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32 (EN55032) Class B Conducted and Radiated Emissions

## MAX17570B/MAX17570E Evaluation Kits

## Quick Start

## Required Equipment

- One 60V, 300mA DC Power Supply
- Digital Multimeters (DMM)
- Load  Resistors  Capable  of  Sinking  up  to  300mA (16.6Ω)

## Procedure

The  EV  kits  are  fully  assembled  and  tested.  Follow  the steps to verify and test individual converter operation:

Caution: Do  not  turn  on  the  power  supply  until  all connections are completed.

1.  Disable  the  power  supply  and  set  the  input  power supply at a valid input voltage.
2.  Connect the positive terminal and negative terminal of the power supply to the V IN  pad and its adjacent PGND pad of the converter under evaluation.
3.  Connect the positive terminal of the 300mA (max) load to  the  V OUT   pad  and  the  negative  terminal  to  the nearest PGND pad of the corresponding converter.
4.  Connect  the  DMM  across  the  V OUT   pad  and  the nearest PGND pad.
5.  Verify that the shunts are not installed across pins on jumper JU101 for the MAX17570B and JU201 for the MAX17570E. See Table 1 for details.
6.  Turn on the input power supply.
7.  Verify  that  the  DMM  displays  the  expected  terminal voltage with respect to PGND.

Ordering Information appears at end of data sheet.

319-101011; Rev 0; 7/23

## Evaluate: MAX17570B/MAX17570E Converters

## MAX17570B/MAX17570E EV Kits Board

Figure 1. MAX17570B/MAX17570E EV Kits Board -Top View

<!-- image -->

## EV Kits Configuration

Figure 2. MAX17570B/MAX17570E EV Kits Board Connections

<!-- image -->

## Detailed Description

The MAX17570B/MAX17570E EV kits are designed to demonstrate the salient features of the MAX17570 high-voltage, high-efficiency, synchronous step-down DC-DC converter family. The EV kits consist of typical application circuits of two different converters. Each of these circuits are electrically isolated from each other and hosted on the same PCB. Each of these converters can be evaluated for their performance under different operating conditions by powering them from their respective input pins.

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The EV kits offer an adjustable input undervoltage-lockout level feature for the converters. For the MAX17570B, when jumper JU101 is left open, the converter is enabled when the input voltage rises above 6.5V. To disable the MAX17570B, install a shunt across pins 2-3 on jumper JU101. For the MAX17570E, when jumper JU201 is left open, the converter is enabled when the input voltage rises above 6.5V. To disable the MAX17570E, install a shunt across pins 2-3 on jumper JU201.  See Table  1 for  jumper  settings.  Refer  to  the Setting  the  Input  Undervoltage-Lockout  Level section  in  the MAX17570 data sheet for more details.

## Evaluate: MAX17570B/MAX17570E Converters

## MAX17570B/MAX17570E Evaluation Kits

If the EN/UVLO pin is driven from an external signal source, it is recommended that a m inimum 1kΩ series resistance is placed between the signal source output and the EN/UVLO pin to reduce voltage ringing on the line.

## Switching Frequency and External Clock Synchronization (RT/SYNC)

The switching frequency of the MAX17570B/MAX17570E converters can be programmed from 200kHz to 1MHz by using a resistor connected from the RT/SYNC pin to SGND. Resistors R103 for the MAX17570B and R203 for the MAX17570E program the desired switching frequencies. The default switching frequency with the RT/SYNC pin open is 400kHz. To optimize performance and component size in the EV kits, 400kHz is chosen for the MAX17570B/MAX17570E.

The  MAX17570B EV kit can  be  synchronized  to  an  external  clock  source  using  the  SYNC  pad  and  optional  C109 capacitor. The external synchronization clock frequency must be between 1.1 x f SW  and 1.4 x f SW , where f SW  is the switching frequency programmed by the resistor R103 connected to the RT/SYNC pin. Refer to the Switching Frequency and  Clock  Synchronization section  of  the  MAX17570  data  sheet  for  guidance  on  selecting  C109.  The  external synchronization feature is not available for the MAX17570E.

## Input-Capacitor Selection

The input capacitors C107 for the MAX17570B, and C207 for the MAX17570E serve to reduce current peaks drawn from the input power supply and reduce switching frequency ripple at the input. Input capacitors are chosen to be 1µF/100V for the MAX17570B/MAX17570E EV kits. Refer to the Input Capacitor section in the MAX17570 data sheet for guidance on choosing input capacitance.

## Output-Capacitor Selection

X7R ceramic capacitors are preferred due to their stability over temperature in industrial applications. The required output capacitors C110 for the MAX17570B and C210 for the MAX17570E are chosen to be 10µF/25V/1206. Refer to the Output Capacitor section in the MAX17570 data sheet for more details.

## Hot Plug-In and Long Input Cables

The EV kits provide optional electrolytic 10µF/100V capacitors (C103 for the MAX17570B and C203 for the MAX17570E) to dampen input voltage peaks and oscillations that may arise during hot plug-in and/or due to long input cables. These capacitors limit the peak voltage at the input of the DC-DC converters when the EV kits are powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables, between the input power source and the EV kit circuit, can cause input-voltage oscillations due to the inductance of the cables. The equivalent series resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables.

## Electromagnetic Interference (EMI)

Compliance to conducted emissions (CE) standards requires an EMI filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter and limits the noise injected back  into  the  input  power  source.  Use  of  EMI  filter  components  as  shown  in  the  EV  kit  schematic  results  in  lower conducted emissions, below CISPR32 Class B limits. The manufacturer part numbers of the EMI filter components are listed as optional in the BOM. The EV kits' PCB layouts are also designed to limit radiated emissions from the switching nodes of the power converter, resulting in radiated emissions below CISPR32 Class B limits. Further, capacitors placed near the input of the board help in attenuating high-frequency noise.

## Table 1. EN/UVLO Jumper Description (JU101 and JU201)

| SHUNT POSITION   | EN/UVLO PIN                                                                                                                          | OUTPUT                                                |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Not installed*   | Connected to the center nodes of the respective resistor-dividers (R101 and R102 for the MAX17570B; R201 and R202 for the MAX17570E) | Programmed to start up at desired input-voltage level |
| 1-2              | Connected to V IN                                                                                                                    | Enabled                                               |
| 2-3              | Connected to PGND                                                                                                                    | Disabled                                              |

*Default position.

## MAX17570B/MAX17570E EV Kits Typical Operating Characteristics

(V IN  = V EN/UVLO  = 24V, C IN  = C VCC = 1μF, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

SHOTDOWNTHROOGHENABLE

<!-- image -->

## MAX17570B/MAX17570E EV Kits Typical Operating Characteristics (continued)

(V IN  = V EN/UVLO  = 24V, C IN  = C VCC = 1μF, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17570B/MAX17570E EV Kits Typical Operating Characteristics (continued)

(V IN  = V EN/UVLO  = 24V, C IN  = C VCC = 1μF, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluate: MAX17570B/MAX17570E Converters

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Kemet           | www.kemet.com     |
| Taiyo Yuden     | www.yuden.co.jp   |
| Coilcraft       | www.coilcraft.com |
| Vishay          | www.vishay.com    |
| Panasonic Corp. | www.panasonic.com |

Note:

When contacting these component suppliers, indicate that the MAX17570 is being used.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17570BEVKIT# | EV Kit |
| MAX17570EEVKIT# | EV Kit |

## MAX17570B/MAX17570E Evaluation Kits

## Evaluate: MAX17570B/MAX17570E Converters

## MAX17570B EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATION   | DESCRIPTION                                            | MANUFACTURER PART NUMBER   |
|--------|-------|---------------|--------------------------------------------------------|----------------------------|
|      1 |     2 | C101, C106    | 0.1μF ±10%, 100V, X7R Ceramic Capacitor (0603)         | TAIYO YUDEN HMK107B7104KA  |
|      2 |     1 | C103          | 10μF ±20%, 100V, Aluminum Electrolytic Capacitor       | KEMET EDK106M100A9HAA      |
|      3 |     1 | C105          | 220pF ±10%, 100V, Ceramic Capacitor (0402)             | MURATA GRM155R72A221KA01   |
|      4 |     1 | C107          | 1μF ±10%, 100V, X7R Ceramic Capacitor (1206)           | TAIYO YUDEN HMK316B7105KLH |
|      5 |     1 | C108          | 1μF ±10%, 16V, X7R Ceramic Capacitor (0603)            | TAIYO YUDEN EMK107B7105KA  |
|      6 |     1 | C110          | 10μF ±10%, 25V, X7R Ceramic Capacitor (1206)           | MURATA GRM31CR71E106KA12   |
|      7 |     1 | C111          | 0.1μF ±10%, 25V, X7R Ceramic Capacitor (0402)          | MURATA GRM155R71E104KE14   |
|      8 |     1 | L102          | 47μH ±20%, Inductor 0.68A                              | COILCRAFT LPS4018-473MR    |
|      9 |     1 | R101          | 3.32MΩ ±1% Resistor (0402)                             | VISHAY DALE CRCW04023M32FK |
|     10 |     1 | R102          | 768kΩ ±1% Resistor (0402)                              | VISHAY DALE CRCW0402768KFK |
|     11 |     1 | R103          | 9.76kΩ ±1% Resistor (0402)                             | PANASONIC ERJ-2RKF9761     |
|     12 |     1 | R104          | 10kΩ ±1% Resistor (0402)                               | VISHAY DALE CRCW040210K0FK |
|     13 |     1 | U101          | MAX17570B, Integrated Step-Down Converter              | MAXIM MAX17570BATA+        |
|     14 |     1 | L101          | OPTIONAL: 33μH ±20%, Inductor 0.8A                     | COILCRAFT LPS3030-333MR    |
|     15 |     2 | C102, C104    | OPTIONAL: 1μF ±10%, 100V, X7R Ceramic Capacitor (1206) | TAIYO YUDEN HMK316B7105KLH |
|     16 |     1 | C109          | OPEN: Capacitor (0402)                                 | -                          |

## MAX17570E EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATION   | DESCRIPTION                                            | MANUFACTURER PART NUMBER   |
|--------|-------|---------------|--------------------------------------------------------|----------------------------|
|      1 |     2 | C201, C206    | 0.1μF ±10%, 100V, X7R Ceramic Capacitor (0603)         | TAIYO YUDEN HMK107B7104KA  |
|      2 |     1 | C203          | 10μF ±20%, 100V, Aluminum Electrolytic Capacitor       | KEMET EDK106M100A9HAA      |
|      3 |     1 | C205          | 220pF ±10%, 100V, Ceramic Capacitor (0402)             | MURATA GRM155R72A221KA01   |
|      4 |     1 | C207          | 1μF ±10%, 100V, X7R Ceramic Capacitor (1206)           | TAIYO YUDEN HMK316B7105KLH |
|      5 |     1 | C208          | 1μF ±10%, 16V, X7R Ceramic Capacitor (0603)            | TAIYO YUDEN EMK107B7105KA  |
|      6 |     1 | C210          | 10μF ±10%, 25V, X7R Ceramic Capacitor (1206)           | MURATA GRM31CR71E106KA12   |
|      7 |     1 | C211          | 0.1μF ±10%, 25V, X7R Ceramic Capacitor (0402)          | MURATA GRM155R71E104KE14   |
|      8 |     1 | L202          | 47μH ±20%, Inductor 0.68A                              | COILCRAFT LPS4018-473MR    |
|      9 |     1 | R201          | 3.32MΩ ±1% Resistor (0402)                             | VISHAY DALE CRCW04023M32FK |
|     10 |     1 | R202          | 768kΩ ±1% Resistor (0402)                              | VISHAY DALE CRCW0402768KFK |
|     11 |     1 | R203          | 9.76kΩ ±1% Resistor (0402)                             | PANASONIC ERJ-2RKF9761     |
|     12 |     1 | R204          | 10kΩ ±1% Resistor (0402)                               | VISHAY DALE CRCW040210K0FK |
|     13 |     1 | U201          | MAX17570E, Integrated Step-Down Converter              | MAXIM MAX17570EATA+        |
|     14 |     1 | L201          | OPTIONAL: 33μH ±20%, Inductor 0.8A                     | COILCRAFT LPS3030-333MR    |
|     15 |     2 | C202, C204    | OPTIONAL: 1μF ±10%, 100V, X7R Ceramic Capacitor (1206) | TAIYO YUDEN HMK316B7105KLH |

## MAX17570B/MAX17570E

## Evaluation Kits

## Evaluate: MAX17570B/MAX17570E Converters

## MAX17570B EV Kit Schematic

<!-- image -->

## Evaluate: MAX17570B/MAX17570E Converters

## MAX17570E EV Kit Schematic

<!-- image -->

## Evaluate: MAX17570B/MAX17570E Converters

## MAX17570B/MAX17570E EV Kits PCB Layout Diagrams

<!-- image -->

Figure 3. MAX17570B/MAX17570E EV Kits PCB Layout Diagram -Top Silkscreen

Figure 4. MAX17570B/MAX17570E EV Kits PCB Layout Diagram -Top Layer

<!-- image -->

Figure 5. MAX17570B/MAX17570E EV Kits PCB Layout Diagram -Layer 2

<!-- image -->

## Evaluate: MAX17570B/MAX17570E Converters

## MAX17570B/MAX17570E EV Kits PCB Layout Diagrams (continued)

<!-- image -->

Figure 6. MAX17570B/MAX17570E EV Kits PCB Layout Diagram -Layer 3

Figure 7. MAX17570B/MAX17570E EV Kits PCB Layout Diagram -Bottom Layer

<!-- image -->

Figure 8. MAX17570B/MAX17570E EV Kits PCB Layout Diagram -Bottom Silkscreen

<!-- image -->

## Evaluate: MAX17570B/MAX17570E Converters

## Revision History

## MAX17570B/MAX17570E

## Evaluation Kits

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.