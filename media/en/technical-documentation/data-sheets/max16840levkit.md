<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16840L low-power (5W input) evaluation kit (EV kit) demonstrates the MAX16840 HBLED driver IC used for Solid State Lighting (SSL) applications. The EV kit is configured as a buck-boost topology for 3 to 5 LEDs with an output power of 4W. The device is designed for standard  MR16  applications.  The  typical  input  power  from 12V AC is 5W.

The EV kit is a fully assembled and tested surface-mount PCB designed and optimized to accommodate an MR16 application  form  factor.  The  EV  kit  is  compatible  with electronic and magnetic transformers.

SSL MR16 lamps face compatibility issues with electronic transformers  at  low  power  levels.  If  the  current  drawn from an electronic transformer is below a certain level it stops  operating,  which  could  cause  visible  flicker  from the  lamp.  Due  to  compatibility  issues  with  electronic transformers  at  low  power  levels,  active  power-factor correction (PFC) is not featured in this EV kit.

To improve its compatibility with electronic transformers at  low  power  levels,  an  input  electrolytic  capacitor  is included on this EV kit. For this reason, it is not dimmable.

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1            |     1 | 330 F F Q 20%, 25V electrolytic capacitor Rubycon ZLH series                 |
| C2            |     1 | 0.22 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E224KA88D   |
| C3, C4        |     2 | 10 F F Q 10%, 16V X7R ceramic capacitors (1206) Taiyo Yuden EMK316B7106KL-TD |
| C5            |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K        |
| C6            |     1 | 1nF Q 5%, 50V C0G X7R ceramic capacitor (0603) Murata GRM1885C1H102JA01D     |
| C7            |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J           |
| D1            |     1 | Schottky bridge-rectifier diode (HD DIP) Central Semi CBRHDSH1-40L           |

<!-- image -->

- S Input Voltages Allowed

9V AC to 13.2V AC from AC Source or from Magnetic Transformers

9V DC to 18V DC

Output of Several Electronic Transformers

- S Drives 3 to 5 Series HBLEDs
- S 46V Overvoltage Protection
- S 4W Output Power
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| D2            |     1 | 3A, 60V Schottky diode (SMA) Diodes Inc. B360A-13-F                               |
| F1            |     1 | 1.5A, 63V fuse Littelfuse 0466 1.5NR                                              |
| L1            |     1 | 33 F H, 1.15A inductor Würth 744778133                                            |
| Q1            |     1 | Dual npn transistor (SOT363) Central Semi CMKT5088 (Top Mark: K88)                |
| R1            |     1 | 0.1 I Q 1%, 1/2W resistor (1210)                                                  |
| R2            |     1 | 464k I resistor (0603)                                                            |
| R3, R4        |     2 | 12k I Q 1% resistors (0603)                                                       |
| R5            |     1 | 9.1k I Q 1% resistor (0603)                                                       |
| R6            |     1 | 26.1k I Q 1% resistor (0603)                                                      |
| R7            |     1 | 0.27 I Q 1%, 1/2W resistor (0603)                                                 |
| U1            |     1 | LED driver with integrated switch (10 TDFN-EP) Maxim MAX16840ATB+ (Top Mark: AWY) |
| -             |     1 | PCB: MAX16840 EVALUATION KIT#                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX16840L Evaluation Kit

## Evaluates: MAX16840

## Features

- MAX16840L EV kit
- AC or DC source
- 3 to 5 series-connected LED strings rated no less than 330mA
- Current  probe  to  measure  the  LED  current  (the HBLED should be illuminated)

## Procedures

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Connect the AC or DC source to the AC1 and AC2 PCB pads.
- 2)  Connect  the  LED  string  anode  and  cathode  to  the LED+ and LED- PCB pads, respectively.
- 3)  Clip the current probe across the LED+ wire to measure the HBLED current.
- 4)  Enable the power supply.
- 5)  Measure the LED current using the current probe.

## Detailed Description of Hardware

The  MAX16840L  EV  kit  demonstrates  the  MAX16840 HBLED driver IC. The device is an average current-modecontrol  HBLED  driver  IC  for  step-down  (buck),  step-up (boost),  and  step-up/step-down  (buck-boost)  topologies in low-voltage SSL applications. The device has an integrated  0.2 I (max),  48V  switching  MOSFET,  which

<!-- image -->

## MAX16840L Evaluation Kit

## Evaluates: MAX16840

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Littelfuse, Inc.                       | 773-628-1000 | www.littelfuse.com          |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Rubycon Corp.                          | 408-467-3864 | www.rubycon.con             |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| Würth Electronik GmbH & Co. KG         | 201-768-8800 | www.we-online.com           |

Note: Indicate you are using the MAX16840L EV kit when contacting these component suppliers.

## Quick Start

## Required Equipment

allows the device to be used in lighting applications for MR16 and other SSL applications for power levels up to 10W.  The  IC  uses  a  patent-pending  input-current  control  scheme  to  achieve  PFC.  The  HBLED  driver  uses  a fixed-frequency average current-mode to control the duty cycle of the integrated switching MOSFET. The device is available in a 10-pin TDFN package with an exposed pad.

The EV kit circuit is configured in a buck-boost topology that  operates  at  the  device's  fixed  300kHz  switching frequency and provides up to 4W of output power for a string  of  3  to  5  series  HBLEDs  connected at the LED+ and  LED-  PCB  pads.  The  EV  kit  circuit  operates  from an AC or DC supply voltage of 9V RMS  to 13.2V RMS  and from electronic transformers. The EV kit is designed on a proven 2oz copper, two-layer small PCB footprint design that accommodates an MR16 application form factor.

The device uses average current-mode control, with the circuit configured such that the average current flowing into  the  current-sense resistor (R7) on a cycle-by-cycle (switching  frequency)  basis  is  set  by  the  voltage  on the  REFI  pin.  The  average  current  per  switching  cycle flowing into R7 is:

<!-- formula-not-decoded -->

Circuit  components  R2,  R3,  R4,  and  Q1  are  used  to control  the  input  current.  The  average  voltage  across the input capacitors (C1 and C2) is used to control the current  in  the  current-mirror  circuit  formed  by  R2,  R3, R4, and Q1. The current flowing into R2 is approximately proportional  to  the  voltage  on  C1  and  C2  and  is  now reflected on pin 3 of Q1, which sinks the same amount

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16840L Evaluation Kit

## Evaluates: MAX16840

of current from pin 3 of Q1 as that which flows into R2. Inside the device is a 50 F A current source. The current flowing  into  R6  sets  the  input  current  or  the  average current flowing into R7. The circuit tries to keep the input power over the line range of 9V AC to 13.2V AC almost constant,  thus  achieving  LED  current  regulation  in  the Q 10% range over the input range.

Figure 1 illustrates the current waveform in a 4 LED string when the EV kit is powered from a magnetic transformer with a 12V AC, 60Hz output.

In order to charge electrolytic capacitor C1 at the beginning of each power-line cycle, a peaky current is drawn from the electronic transformer. Notice that the electronic transformer is active (switching) until the peak current is 700mA. When the current goes below this level the electronic transformer stops switching.

## Maximum LED+ Voltage

The  device  features  an  internal  46V  overvoltage  protection  at  the  IN  pin  to  protect  the  internal  switching MOSFET from damage if the LED string is open or if the voltage  on  the  LED  string  is  too  high.  However,  when operating the EV kit buck-boost circuit, the LED+ voltage should be limited to 40V.

<!-- image -->

Figure 1. LED Current Waveform Using an Electronic Transformer (Lightech LET60)

<!-- image -->

## Electronic and Magnetic Transformer Compatibility

The MR16 board was tested with 4 LEDs for electronic and magnetic transformer compatibility. Table 1 shows the results with the different transformer models tested.

Figure 2. Input Current Waveform Using an Electronic Transformer (Lightech LET60)

<!-- image -->

Figure 3. Performance with an Electronic Transformer (Lightech LET60)

<!-- image -->

(CH1: Voltage waveform across input electrolytic capacitor C1; CH4:  Input current waveform)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16840L Evaluation Kit

## Evaluates: MAX16840

## Table 1. Recommended Electronic and Magnetic Transformers

| TRANSFORMER        | TESTED INPUT VOLTAGE RANGE   | PERFORMANCE WITHOUT DIMMER*                                                      |
|--------------------|------------------------------|----------------------------------------------------------------------------------|
| Lightech LVT60     | 108V AC to 132V AC/60Hz      | 108V AC, 320mA LED current 120V AC, 329mA LED current 132V AC, 332mA LED current |
| Lightech LET60     | 108V AC to 132V AC/60Hz      | 108V AC, 323mA LED current 120V AC, 330mA LED current 132V AC, 332mA LED current |
| Lightech LET75     | 108V AC to 132V AC/60Hz      | 108V AC, 318mA LED current 120V AC, 331mA LED current 132V AC, 333mA LED current |
| Lightech LET105    | 108V AC to 132V AC/60Hz      | 108V AC, 330mA LED current 120V AC, 333mA LED current 132V AC, 333mA LED current |
| Pony PET-120-12-75 | 108V AC to 132V AC/60Hz      | 108V AC, 324mA LED current 120V AC, 332mA LED current 132V AC, 333mA LED current |
| Pony PET-120-12-60 | 108V AC to 132V AC/60Hz      | 108V AC, 329mA LED current 120V AC, 331mA LED current 132V AC, 333mA LED current |
| CDN CS60           | 207V AC to 254V AC/50Hz      | 207V AC, 318mA LED current 230V AC, 329mA LED current 254V AC, 332mA LED current |
| GE SET60LS         | 207V AC to 254V AC/50Hz      | 207V AC, 307mA LED current 230V AC, 325mA LED current 254V AC, 327mA LED current |
| Nobile EN-60D      | 207V AC to 254V AC/50Hz      | 207V AC, 317mA LED current 230V AC, 328mA LED current 254V AC, 333mA LED current |
| Nobile EN-110D     | 207V AC to 254V AC/50Hz      | 207V AC, 318mA LED current 230V AC, 329mA LED current 254V AC, 332mA LED current |
| Nobile EN-150D     | 207V AC to 254V AC/50Hz      | 207V AC, 327mA LED current 230V AC, 335mA LED current 254V AC, 333mA LED current |
| Nobile EN-250D     | 207V AC to 254V AC/50Hz      | 207V AC, 316mA LED current 230V AC, 327mA LED current 254V AC, 328mA LED current |
| NVC ET-60E         | 207V AC to 254V AC/50Hz      | 207V AC, 322mA LED current 230V AC, 333mA LED current 254V AC, 335mA LED current |
| NVC ET-50S         | 207V AC to 254V AC/50Hz      | 207V AC, 319mA LED current 230V AC, 326mA LED current 254V AC, 331mA LED current |
| Opple DB602        | 207V AC to 254V AC/50Hz      | 207V AC, 319mA LED current 230V AC, 329mA LED current 254V AC, 333mA LED current |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16840L Evaluation Kit Evaluates: MAX16840

## Table 1. Recommended Electronic and Magnetic Transformers (continued)

| TRANSFORMER                   | TESTED INPUT VOLTAGE RANGE   | PERFORMANCE WITHOUT DIMMER*                                                      |
|-------------------------------|------------------------------|----------------------------------------------------------------------------------|
| Osram HTM75                   | 207V AC to 254V AC/50Hz      | 207V AC, 320mA LED current 230V AC, 333mA LED current 254V AC, 334mA LED current |
| Osram HTM70                   | 207V AC to 254V AC/50Hz      | 207V AC, 315mA LED current 230V AC, 329mA LED current 254V AC, 332mA LED current |
| Osram HTM105                  | 207V AC to 254V AC/50Hz      | 207V AC, 310mA LED current 230V AC, 328mA LED current 254V AC, 333mA LED current |
| Osram HTM150                  | 207V AC to 254V AC/50Hz      | 207V AC, 288mA LED current 230V AC, 320mA LED current 254V AC, 330mA LED current |
| Osram ECO-ET105               | 207V AC to 254V AC/50Hz      | 207V AC, 304mA LED current 230V AC, 327mA LED current 254V AC, 330mA LED current |
| Osram ET-PARROT 105           | 207V AC to 254V AC/50Hz      | 207V AC, 308mA LED current 230V AC, 331mA LED current 254V AC, 332mA LED current |
| Osram ET-P 60                 | 207V AC to 254V AC/50Hz      | 207V AC, 308mA LED current 230V AC, 332mA LED current 254V AC, 330mA LED current |
| Philips Certaline 60W         | 207V AC to 254V AC/50Hz      | 207V AC, 315mA LED current 230V AC, 331mA LED current 254V AC, 332mA LED current |
| Philips Certaline 105W        | 207V AC to 254V AC/50Hz      | 207V AC, 298mA LED current 230V AC, 320mA LED current 254V AC, 328mA LED current |
| Philips Certaline 150W        | 207V AC to 254V AC/50Hz      | 207V AC, 284mA LED current 230V AC, 310mA LED current 254V AC, 328mA LED current |
| Philips ET-E 60               | 207V AC to 254V AC/50Hz      | 207V AC, 313mA LED current 230V AC, 330mA LED current 254V AC, 332mA LED current |
| Shreyesh 50WH (Made in India) | 207V AC to 254V AC/50Hz      | 207V AC, 288mA LED current 230V AC, 314mA LED current 254V AC, 329mA LED current |
| TCL ET-60H                    | 207V AC to 254V AC/50Hz      | 207V AC, 320mA LED current 230V AC, 331mA LED current 254V AC, 331mA LED current |
| Varilight YT70L               | 207V AC to 254V AC/50Hz      | 207V AC, 322mA LED current 230V AC, 328mA LED current 254V AC, 330mA LED current |
| Varilight YT150               | 207V AC to 254V AC/50Hz      | 207V AC, 324mA LED current 230V AC, 332mA LED current 254V AC, 334mA LED current |

* No flicker.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16840L Evaluation Kit

## Evaluates: MAX16840

<!-- image -->

Figure 4. MAX16840L EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16840L Evaluation Kit

## Evaluates: MAX16840

<!-- image -->

Figure 5. MAX16840L EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX16840L EV Kit PCB Layout-Component Side

## MAX16840L Evaluation Kit

## Evaluates: MAX16840

Figure 7. MAX16840L EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX16840L Evaluation Kit Evaluates: MAX16840

<!-- image -->

Figure 8. MAX16840L EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16840LEVKIT# | EV Kit |

# Denotes RoHS compliant.

11

## MAX16840L Evaluation Kit Evaluates: MAX16840

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.