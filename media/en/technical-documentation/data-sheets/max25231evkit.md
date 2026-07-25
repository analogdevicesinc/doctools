<!-- lastmod 2022-08-02 -->
## MAX25231 Evaluation Kit

## General Description

The MAX25231 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX25231  2.1MHz  high-voltage mini-buck converters in a 12-pin TDFN package. All components are rated for the automotive temperature range. Various test points and jumpers are included for evaluation.

The EV kit comes with a MAX25231ATCA/V+ installed, but can also be used to evaluate all other MAX25231 variants with minimal U1 component changes.

## Features

- 3.5V to 36V Input Supply Range
- 5V or 3.3V Fixed Output Voltage, or Adjustable Between 1V and 10V
- Delivers Up to 1.2A Output Current
- Frequency-Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX25231 EV kit
- 3.5V to 36V, 2A power supply
- Voltmeter
- Electronic load

Ordering Information appears at end of data sheet.

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

Evaluates: MAX25231

## MAX25231 Evaluation Kit

## Detailed Description

The MAX25231 EV kit provides a proven layout for the MAX25231  2.1MHz  synchronous  buck  regulator.  The device accepts input voltages as high as 36V and delivers  up  to  1.2A.  The  EV  kit  can  handle  an  input-supply transient up to 42V. Various test points are included for evaluation.

## Switching Frequency/ External Synchronization

The  device  can  operate  in  two  modes:  forced-PWM or  skip.  Skip  mode  has  better  efficiency  for  light-load conditions. When SYNC is pulled low, the device operates in skip mode for light loads and in PWM mode for larger loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions.

SYNC can be used to synchronize with other supplies if a clock source is present. The device is forced to operate in PWM when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is low impedance when the output voltage is in regulation.  PGOOD is high impedance when the output voltage drops below 6.5% (typ) of its nominal regulated voltage.

To  obtain  a  logic  signal,  pull  up  PGOOD  to  V BIAS   by installing shunts on jumpers PU and LED.

## Evaluates: MAX25231

## Evaluating the Other Variants

The device is available in fixed 5V and 3.3V outputs. The EV kit comes installed with the 5V output version.

## Setting the Output Voltage in Buck Converters

To externally adjust the output voltage (OUT) between 3V and 10V, remove R1 and install a 0Ω resistor on R4. Place appropriate resistors in positions R5 and R6 according to the following equation:

<!-- formula-not-decoded -->

where V FB  = 1V (typ).

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25231EVKIT# | EV Kit |

#Denotes RoHS compliance.

│

## MAX25231 EV Kit Bill of Materials

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C1            |     1 | 4.7uF ±10%, 50V X7R ceramic capacitors (1210) TDK CGA6P3X7R1H475K250AB           |
| C2            |     1 | 22uF ±10%, 25V X7R ceramic capacitor (1210) Murata GRM32ER71E226KE15L            |
| C3            |     1 | 47uF, 50V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE-FK1H470P |
| C7            |     1 | 1uF ±10%, 35V X7R ceramic capacitor (0603) TDK CGA3E1X7R1V105K080AC              |
| C8            |     1 | 0.1uF ±10% 50V X7R ceramic capacitor (0402) TDK CGA2B3X7R1H104K                  |
| C10, C11      |     2 | 2.2uF ±10% 50V X7R ceramic capacitor (1210) TDK CGA6M3X7R1H225K200AB             |
| DS1           |     1 | Green LED (0603) Lite-On Electronics LTST-C191KGKT                               |
| EN, SPS, SYNC |     3 | 3-pin headers                                                                    |
| L1            |     1 | 4.7uH Power Inductor (R=52.2mOhms, I=2A, 4mm x 4mm) Coilcraft XFL4020-472ME      |
| L2            |     1 | 1A Ferrite Bead (1206) Wurth 742792141                                           |
| PU, LED       |     2 | 2-pin headers                                                                    |
| R1            |     1 | 0Ω resistor (0603)                                                               |
| R3            |     4 | 3kΩ ± 5% resistor (0603)                                                         |
| -             |     5 | Shunts                                                                           |
| U1            |     1 | Automotive Mini-Buck (12-pin TDFN) Maxim MAX25231ATCA/V+                         |
| -             |     1 | PCB: MAX25231 Evaluation Kit                                                     |

Evaluates: MAX25231

## MAX25231 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX25231

## MAX25231 EV Kit PCB Layout Diagrams

MAX25231 EV Kit Component Placement Guide-Top

<!-- image -->

MAX25231 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX25231 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX25231 EV Kit Component Placement Guide-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim InteJrated reserves the riJht to chanJe the circuitry and speci¿cations Zithout notice at any time.

<!-- image -->

│

Evaluates: MAX25231