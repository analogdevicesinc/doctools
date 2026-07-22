<!-- lastmod 2022-08-02 -->
## MAX207 Evaluation Kit

## General Description

The  MAX20077  evaluation  kit  (EV  kit) provides a proven  design  to  evaluate  the  MAX20077/MAX25277 2.1MHz/400kHz  high-voltage  mini-buck  converter  in  a 12-pin side-wettable TDFN package. All components are rated for the automotive temperature range. Various test points and jumpers are included for evaluation.

The standard EV kit comes with the MAX20077ATCA/VY+ installed (5V, 2.1MHz), but it can also be used to evaluate other MAX20077/MAX25277 variants with minimal component changes (e.g., IC replacement of U1).

## Benefits and Features

- 3.5V to 36V Input Supply Range
- 5V or 3.3V Fixed Output Voltage, or Adjustable Between 1V and 10V
- Delivers Up to 2.5A Output Current
- Frequency-Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX207/MAX257

## Quick Start

## Required Equipment

- MAX20077 EV kit
- Power supply
- Voltmeter
- Electronic load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive and negative terminals of the  power  supply  to  the  SUP  and  GND  test  pads, respectively.
- 3) Connect the positive terminal of the voltmeter to OUT and the negative terminal to GND2.
- 4) Set the power supply to 14V and 2A current limit. Turn on the power supply.
- 5) With  the  PU  and  LED  headers  shorted,  the  green LED lights up. The voltmeter should display an output voltage of 5V.

Ordering Information appears at end of data sheet.

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                               |
|----------|------------------|--------------------------------------------------------|
| EN       | ON-Middle        | Buck controller enabled                                |
| SPS      | Middle-OFF       | Spread spectrum disabled                               |
| PU, LED  | Installed        | PGOOD is pulled up by V BIAS when OUT is in regulation |
| SYNC     | Middle-FPWM      | Forced-PWM mode                                        |

## Detailed Description

The MAX20077 EV kit provides a proven layout for evaluating all  variants  of  the  MAX20077/MAX25277 family of small, current-mode-controlled buck converter ICs. Each device accepts input voltages as high as 36V and delivers  up  to  2.5A.  The  EV  kit  can  handle  an  input-supply transient up to 40V.

## Switching Frequency and External Synchronization

The ICs can operate in two modes, forced-PWM or skip. Skip mode has better efficiency for light-load conditions. When SYNC is pulled  low,  the  device  operates  in  skip mode for light loads, and in PWM mode for larger loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions.

SYNC can be used to synchronize with other supplies if a clock source is present. The device is forced to operate in PWM when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is low impedance when the output voltage is in regulation.  PGOOD is high impedance when the output voltage  drops  below  8%  (typ)  of  its  nominal  regulated voltage.

To  obtain  a  logic  signal,  pull  up  PGOOD  to  V BIAS   by installing shunts on jumpers PU and LED.

## Evaluating Other Variants

The EV kit comes installed with the fixed-output, 5V/2.1MHz variant  (MAX20077ATCA/VY+) The 2.1MHz and 400kHz variants  can be installed and tested with minimal component changes. For the 2.1MHz variants, install the appropriate IC on the EV kit (U1), while keeping all  other components the same. For 400kHz parts, the inductor should be  increased  to  10μH,  and  the  output  capacitance  must be  a  minimum  44μF  after  derating  is  accounted  for.  For MAX20077ATCE2 and MAX20077ATCD2 high-bandwidth parts,  increase  the  output  capacitance  as  per  the  guidelines in the IC datasheet.

The  MAX20077ATCC/VY+  can  be  installed  for  output voltages  between  1V  and  3V  (2.1MHz).  The  inductor should be set to 4.7μH, and the output capacitance must be a minimum 44μF after derating is accounted for. The output voltage must be externally adjusted.

## Setting the Output Voltage in the Buck Converters

To  externally  adjust  the  output  voltage,  remove  R1  and install a 0Ω resistor on R4. Place appropriate resistors in positions R5 and R6 according to the following equation:

<!-- formula-not-decoded -->

where V FB = 1V (typ) and R6 = 50kΩ.

## Ordering Information

| PART           | TYPE                     |
|----------------|--------------------------|
| MAX20077EVKIT# | 5V output, 2.1MHz EV kit |

# Denotes RoHS compliant.

│

## MAX20077 EV Kit Bill of Materials

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C1            |     1 | 4.7uF ±10%, 50V X7R ceramic capacitors (1210) TDK CGA6P3X7R1H475K250AB           |
| C2            |     1 | 47uF, 50V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE-FK1H470P |
| C3, C4, C5    |     3 | 10uF ±10%, 25V X7R ceramic capacitor (1206) Taiyo Yuden TMJ316BB7106KLHT         |
| C7            |     1 | 1uF ±10%, 35V X7R ceramic capacitor (0603) TDK CGA3E1X7R1V105K080AC              |
| C8            |     1 | 0.1uF ±10% 50V X7R ceramic capacitor (0402) TDK CGA2B3X7R1H104K                  |
| C10, C11      |     2 | 2.2uF ±10% 50V X7R ceramic capacitor (1210) TDK CGA6M3X7R1H225K200AB             |
| DS1           |     1 | Green LED (0603) Lite-On Electronics LTST-C191KGKT                               |
| EN, SPS, SYNC |     3 | 3-pin headers (0.1" spacing)                                                     |
| L1            |     1 | 2.2 μ H Power Inductor Coilcraft XFL5030-222                                     |
| L2            |     1 | 2A Ferrite Bead (1210) Taiyo Yuden FBMH3225HM102NT                               |
| PU, LED       |     2 | 2-pin headers (0.1" spacing)                                                     |
| R1, R2        |     2 | 0Ω resistor (0603)                                                               |
| R3            |     1 | 3kΩ ±5% resistor (0603)                                                          |
| U1            |     1 | Automotive Mini-Buck (12-pin SWTDFN) Maxim MAX20077ATCA/VY+                      |
| -             |     5 | Shunt Jumper (0.1" spacing, Black)                                               |
| -             |     1 | PCB: MAX20077 Evaluation Kit                                                     |

Evaluates: MAX20077/MAX25277

## MAX20077 EV Kit Schematic

<!-- image -->

│

## MAX20077 Evaluation Kit

## MAX20077 EV PCB Layouts

MAX20077 EV Kit Component Placement Guide ─ Top

<!-- image -->

MAX20077 EV Kit PCB Layout ─ Internal Layer 2

<!-- image -->

MAX20077 EV Kit Component Placement Guide ─ Bottom

<!-- image -->

MAX20077 EV Kit PCB Layout ─ Internal Layer 3

<!-- image -->

│

## MAX20077 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------|-----------------|
|                 0 | 3/18            | Initial release                                  | -               |
|                 1 | 12/18           | Added MAX25277                                   | 1-5             |
|                 2 | 2/19            | Removed MAX25277 from references to EV kit title | 1-5             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserYes the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX20077/MAX25277