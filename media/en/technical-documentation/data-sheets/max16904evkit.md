<!-- lastmod 2022-08-02 -->
## MAX16904 Evaluation Kit

## General Description

The MAX16904 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX16904  2.1MHz  high-voltage mini-buck converter in a 16-pin TSSOP package. All components are rated for the automotive temperature range. Various test points are included for evaluation.

The  EV  kit  PCB  comes  with  a  MAX16904RAUE50/ V+ installed.  The  EV  kit  outputs  a  fixed  +5V.  The  fixed +3.3V  output  version  can  also  be  installed  with  minimal  component  changes.  Contact  the  factory  for  free samples  of  the  pin-compatible  MAX16904SAUE50/V+, MAX16904SAUE33/V+,  and  MAX16904RAUE33/V+  to evaluate these devices.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1            |     1 | 4.7µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H475K |
| C4            |     1 | 0.1µF ±10%, 16V ceramic capacitor (0402) TDK C1005X7R1C104K        |
| C5            |     1 | 10µF ±10%, 25V X7R ceramic capacitor (1210) TDK C3225X7R1E106M     |
| C6            |     1 | 2.2µF ±10%, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C225K    |
| C8            |     0 | Not installed, ceramic capacitor (0603)                            |
| D2            |     1 | Green LED (0603)                                                   |
| JU1, JU2      |     2 | 3-pin headers                                                      |
| JU3           |     1 | 2-pin header                                                       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX16904 when contacting these component suppliers.

## Features

- Up to +42V Input Supply Range
- Delivers Up to 600mA Output Current
- +5V Output
- 2.1MHz Switching Frequency
- Proven PCB Layout
- Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16904EVKIT# | EV Kit |

#Denotes RoHS compliant.

| DESIGNATION          |   QTY | DESCRIPTION                                                      |
|----------------------|-------|------------------------------------------------------------------|
| L1                   |     1 | 4.7µH, 2.0A power inductor TDK LTF5022T-4R7N2R0                  |
| R1, R2               |     0 | Not installed, resistors (0603)                                  |
| R4                   |     1 | 3kΩ ±5% resistor (0603)                                          |
| TP2, TP9, TP10, TP11 |     4 | Black multipurpose test points                                   |
| TP3, TP4             |     2 | Red multipurpose test points                                     |
| TP5, TP6             |     2 | Red miniature test points                                        |
| TP8                  |     0 | Not installed, miniature test point                              |
| U1                   |     1 | 2.1MHz mini-buck converter (16 TSSOP-EP) Maxim MAX16904SAUE50/V+ |
| -                    |     3 | Shunts                                                           |
| -                    |     1 | PCB: MAX16904 EVALUATION KIT                                     |

Evaluates: MAX16904

<!-- image -->

## Quick Start

## Required Equipment

- MAX16904 EV kit
- +12V, 1A DC power supply (PS1)
- Electronic load or equivalent resistor load
- Two digital multimeters (DMMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that the jumpers are in their default position, as shown in Table 1.
- 2)  Connect  the  positive  terminal  of  the  +12V  supply to  VSUP  (TP3)  and  the  negative  terminal  to  PGND (TP2).
- 3)  Set  DMM1  to  measure  voltage  and  connect  the positive terminal to VOUT (TP4). Connect the negative terminal to PGND (TP11).
- 4)  Set the power supply to 1A current limit. Turn on the power supply.
- 5)  With jumper JU3 shorted, the green LED should light up. DMM1 should display an output voltage of +5V.

## Additional Evaluation

- 1)  Set DMM2 to measure current and connect the positive  terminal  to  VOUT  (TP4).  Connect  the  negative terminal to an electronic load.
- 2)  Set the electronic load to 300mA or use an equivalent resistor load. The resistor load is calculated based on +5V output and should be approximately 10Ω. If using a resistor load, make sure it can handle 3W.
- 3)  Turn on the power supply and electronic load. DMM2 gives  the  load  current  while  DMM1  gives  the  output voltage.
- 4)  Increase the load to 600mA and observe the output.

## Table 1. Jumper Descriptions (JU1, JU2, JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                 |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects EN to VSUP (normal operation).                                                                                                                                     |
| JU1      | 2-3              | Connects EN to PGND (shutdown).                                                                                                                                             |
| JU2      | 1-2*             | Connects SYNC to VBIAS to enable forced-PWM mode.                                                                                                                           |
| JU2      | 2-3              | Connects SYNC toAGND to enable skip mode under light-load conditions.                                                                                                       |
| JU2      | Open             | When SYNC is unconnected or when a clock source is present, forced-PWM mode is enabled. SYNC can be used to synchronize with other supplies when a clock source is present. |
| JU3      | 1-2*             | Powers the green LED from the VBIAS supply.                                                                                                                                 |
| JU3      | Open             | Does not power the green LED from the VBIAS supply.                                                                                                                         |

*Default position.

Evaluates: MAX16904

## Detailed Description of Hardware

The MAX16904 EV kit provides a proven layout for the MAX16904  2.1MHz  synchronous  buck  regulator.  The device  accepts  input  voltages  as  high  as  +28V  and delivers up to 600mA at +5V. The EV kit can handle an input-supply transient up to +42V. Various test points are included for evaluation.

## SYNC

The  device  can  operate  in  two  modes,  forced  PWM  or skip mode. For light-load conditions, skip mode has better efficiency. When SYNC is pulled low, the device operates in  skip  mode  for  light  loads  and  PWM  mode  for  larger loads. By applying a high level on SYNC, the device is forced to do PWM even under light-load conditions.

SYNC can also be used to synchronize with other supplies if a clock source is present. The device forces PWM when a clock source is present based on the input clock.

## Evaluating the +3.3V Version

The device is available in fixed +5V and +3.3V outputs. The EV kit comes installed with the +5V output version. The +3.3V output part can be swapped with the +5V part on the EV kit and the device functions without changing other  components.  To  optimize  efficiency,  refer  to  the MAX16904 IC data sheet.

│

## Evaluates: MAX16904

Figure 1. MAX16904 EV Kit Schematic

<!-- image -->

## MAX16904 Evaluation Kit

Figure 2. MAX16904 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16904 EV Kit PCB Layout-Component Side

<!-- image -->

## Evaluates: MAX16904

Figure 4. MAX16904 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX16904 EV Kit Component Placement GuideSolder Side

<!-- image -->

│

## MAX16904 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION            | PAGES CHANGED   |
|-------------------|-----------------|------------------------|-----------------|
|                 0 | 11/11           | Initial release        | -               |
|                 1 | 5/20            | Updated Component List | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserYes the right to Fhange the FirFuitry and speFi¿Fations Zithout notiFe at any time.

<!-- image -->

│

Evaluates: MAX16904