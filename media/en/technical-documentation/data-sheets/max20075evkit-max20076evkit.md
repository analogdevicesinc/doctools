<!-- lastmod 2022-08-04 -->
## MAX20075/MAX20076 Evaluation Kits

## General Description

The  MAX20075  and  MAX20076  evaluation  kits  (EV  kit) provide  a  proven  design  to  evaluate  the  MAX20075/ MAX20076/MAX25276  2.1MHz  high-voltage  mini-buck converters in a 12-pin TDFN package. All components are rated  for  the  automotive  temperature  range.  Various  test points and jumpers are included for evaluation.

The EV kit comes with a MAX2007\_DATCA/V+ installed, but  can  also  be  used  to  evaluate  all  other  MAX20075/ MAX20076/MAX25276 variants  with  minimal  U1  component changes.

## Benefits and Features

- 3.5V to 36V Input Supply Range
- 5V or 3.3V Fixed Output Voltage, or Adjustable Between 1V and 10V
- Delivers Up to 0.6A/1.2A Output Current
- Frequency-Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX20075 or MAX20076 EV kit
- 3.5V to 36V, 2A power supply
- Voltmeter
- Electronic load

Ordering Information appears at end of data sheet.

## Evaluate: MAX20075/MAX20075D/ MAX20076/MAX20076D/MAX20076E/ MAX25276/MAX25276D

## Procedure

The EV kit is fully assembled and tested, follow the steps below to activate the board. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect  the positive and negative terminals of the  power  supply  to  the  SUP  and  GND  test  pads, respectively.
- 3) Connect the positive terminal of the voltmeter to OUT, and the negative terminal to GND2.
- 4) Set the power supply to 14V and 2A current limit. Turn on the power supply.
- 5) With the PU and LED jumpers shorted, the green LED should light up. The voltmeter should display an output voltage of 5V.

## Additional Evaluation

- 6) Connect  the  positive  and  negative  terminals  of  an electronic load to OUT and GND, respectively.
- 7) Set the electronic load to 100mA or use an equivalent resistive load. The resistive load is calculated based on  5V  output  and  should  be  approximately  50Ω.  If using a resistor load, make sure it can handle 0.5W.
- 8) Turn on the power supply and electronic load. Verify that OUT is 5V.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                           |
|----------|------------------|----------------------------------------------------|
| EN       | Middle-ON        | Buck controller enabled                            |
| SPS      | Middle-OFF       | Spread spectrum disabled                           |
| PU, LED  | Installed        | PGOOD pulls up to V BIAS when OUT is in regulation |
| SYNC     | Middle-FPWM      | Forced-PWM mode                                    |

<!-- image -->

## MAX20075/MAX20076 Evaluation Kits

## Detailed Description

The  MAX20075  and  MAX20076  EV  kits  provide  a proven layout for the MAX20075/MAX20075D/MAX20076/ MAX20076D/MAX20076E/MAX25276/MAX25276D 2.1MHz synchronous buck regulator. The device accepts input voltages as high as 36V and delivers up to 0.6A and 1.2A.  The  EV  kits  can  handle  an  input-supply  transient up to 42V. Various test points are included for evaluation.

## Switching Frequency/ External Synchronization

The  devices  can  operate  in  two  modes:  forced-PWM or  skip.  Skip  mode  has  better  efficiency  for  light-load conditions. When SYNC is pulled low, the device operates in skip mode for light loads and in PWM mode for larger loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions.

SYNC can be used to synchronize with other supplies if a clock source is present. The device is forced to operate in PWM when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The  EV  kits  provide  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is low impedance when the output voltage is in regulation.  PGOOD is high impedance when the output voltage drops below 6.5% (typ) of its nominal regulated voltage.

To  obtain  a  logic  signal,  pull  up  PGOOD  to  V BIAS   by installing shunts on jumpers PU and LED.

## Evaluate: MAX20075/MAX20075D/ MAX20076/MAX20076D/MAX20076E/ MAX25276/MAX25276D

## Evaluating the Other Variants

The devices are available in fixed 5V,  3.3V, and 5.147V  outputs. The EV kits come installed with the 5V output version. The other parts can be swapped with the 5V part without changing other components.

## Setting the Output Voltage in Buck Converters

To externally adjust the output voltage (OUT) between 3V and 10V, remove R1 and install a 0Ω resistor on R4. Place appropriate resistors in positions R5 and R6 according to the following equation:

<!-- formula-not-decoded -->

where V FB  = 1V (typ).

Use an external resistor-divider with the MAX2007\_ATCC for output voltages between 1V and 3V.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20075EVKIT# | EV Kit |
| MAX20076EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX20075/MAX20076 EV Kit Bill of Materials

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C1            |     1 | 4.7uF ±10%, 50V X7R ceramic capacitors (1210) TDK CGA6P3X7R1H475K250AB            |
| C2            |     1 | 22uF ±10%, 25V X7R ceramic capacitor (1210) Murata GRM32ER71E226KE15L             |
| C3            |     1 | 47uF, 50V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE-FK1H470P  |
| C7            |     1 | 1uF ±10%, 35V X7R ceramic capacitor (0603) TDK CGA3E1X7R1V105K080AC               |
| C8            |     1 | 0.1uF ±10% 50V X7R ceramic capacitor (0402) TDK CGA2B3X7R1H104K                   |
| C10, C11      |     2 | 2.2uF ±10% 50V X7R ceramic capacitor (1210) TDK CGA6M3X7R1H225K200AB              |
| DS1           |     1 | Green LED (0603) Lite-On Electronics LTST-C191KGKT                                |
| EN, SPS, SYNC |     3 | 3-pin headers                                                                     |
| L1            |     1 | 4.7uH Power Inductor (R=52.2mOhms, I=2A, 4mm x 4mm) Coilcraft XFL4020-472ME       |
| L2            |     1 | 1A Ferrite Bead (1206) Wurth 742792141                                            |
| PU, LED       |     2 | 2-pin headers                                                                     |
| R1            |     1 | 0Ω resistor (0603)                                                                |
| R3            |     4 | 3kΩ ± 5% resistor (0603)                                                          |
| -             |     5 | Shunts                                                                            |
| U1            |     1 | Automotive Mini-Buck (12-pin TDFN) Maxim MAX20075 D ATCA/V+ or MAX20076 D ATCA/V+ |
| -             |     1 | PCB: MAX20075/76 Evaluation Kit                                                   |

│

Evaluate: MAX20075/MAX20075D/

MAX20076/MAX20076D/MAX20076E/

MAX25276/MAX25276D

## MAX20075/MAX20076 EV Kit Schematic

<!-- image -->

│

## MAX20075/MAX20076 Evaluation Kits

ART FILM - ASSEMBLY\_TOP

## MAX20075/MAX20076 EV Kit PCB Layouts

MAX20075/76 EV Kit Component Placement Guide-Top ART FILM - INTERNAL2

<!-- image -->

ART FILM - ASSEMBLY\_TOP

MAX20075/76 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

ART FILM - INTERNAL2

Evaluate: MAX20075/MAX20075D/ MAX20076/MAX20076D/MAX20076E/

MAX25276/MAX25276D ART FILM - INTERNAL3

MAX20075/76 EV Kit PCB Layout-Internal Layer 3 ART FILM - ASSEMBLY\_BOTTOM

<!-- image -->

ART FILM - INTERNAL3

MAX20075/76 EV Kit Component Placement Guide-Bottom

<!-- image -->

ART FILM - ASSEMBLY\_BOTTOM

│

## MAX20075/MAX20076 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------|-----------------|
|                 0 | 1/17            | Initial release                                                 | -               |
|                 1 | 2/19            | Updated to add MAX25276                                         | 1-5             |
|                 2 | 10/19           | Updated to add MAX20075D/MAX20076D/MAX25276D to parts evaluated | 1-5             |
|                 3 | 2/20            | Added MAX20076E                                                 | 1-5             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluate: MAX20075/MAX20075D/

MAX20076/MAX20076D/MAX20076E/

MAX25276/MAX25276D