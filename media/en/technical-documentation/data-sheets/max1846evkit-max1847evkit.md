<!-- lastmod 2022-08-04 -->
## General Description

The MAX1846 evaluation kit (EV kit) contains both the MAX1846 and MAX1847. Both devices are inverting, current-mode, constant-frequency PWM controllers. The MAX1846 circuit is configured for a +12V input and a -5V output at 2A. The MAX1847 circuit is configured for a +3.3V input and a -12V output at 400mA. Each circuit  is  powered separately so there is no interaction between the two circuits. The MAX1846 is available in a 10-pin µMAX ® package and the MAX1847 is available in a 16-pin QSOP package.

The MAX1846 EV kit is a fully assembled and tested surface-mount circuit board. With minimal modification, it can also be used to evaluate other output voltages.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1, C11       |     2 | 0.47µF ± 10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E474K     |
| C2, C3, C4    |     3 | 22µF ± 20%, 10V X5R ceramic capacitors (1812) TDK C4532X5R1A226M          |
| C5            |     1 | 0.22µF ± 10%, 25V X7R ceramic capacitor (0805) Taiyo Yuden GMK212BJ224KG  |
| C6, C16       |     2 | 220pF ± 10%, 50V C0G ceramic capacitors (0805) Murata GRM2165C2A221J      |
| C7, C8        |     2 | 47µF ±20%, 16V POSCAPs SANYO 16TQC47M                                     |
| C9, C19       |     2 | 0.1µF ± 10%, 50V X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ104KG  |
| C10           |     1 | 1200pF ± 10%, 50V C0G ceramic capacitor (0805) Murata GRM2195C1H122J      |
| C12, C13, C14 |     3 | 10µF ± 20%, 25V X5R ceramic capacitors (1812) TDK C4532X7R1E106K          |
| C15           |     1 | 0.047µF ± 10%, 25V X7R ceramic capacitor (0805) Taiyo Yuden UMK212BJ473KG |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ 3V to 16.5V Input Range
- ♦ MAX1846 Circuit Configured for +12V Into -5V at 2A
- ♦ MAX1847 Circuit Configured for +3.3V Into -12V at 400mA
- ♦ Evaluates Both the MAX1846 and MAX1847 Independently
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX1846EVKIT | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C17, C18      |     2 | 100µF ± 20%, 10V POSCAPs SANYO 10TPB100M                                         |
| C20           |     1 | 390pF ± 10%, 50V C0G ceramic capacitor (0805) Murata GRM2165C2A391J              |
| C21, C22      |     2 | 1000pF ±10%, 50V C0G ceramic capacitors (0805) Murata GRM40COG102K050AL          |
| D1, D2        |     2 | 5A, 40V Schottky diodes (SMC) Central Semiconductor CMSH5-40                     |
| JU1, JU2      |     2 | Jumpers, SIP3, 3-pin headers                                                     |
| JU1, JU2      |     2 | Shunts                                                                           |
| L1, L2        |     2 | 10µH, 10A power inductors Coilcraft DO5022P-103 or Cooper (Coiltronics) UP4B-100 |
| P1            |     1 | -8.0A, -20V p-channel MOSFET Fairchild FDS6375 (8 SO)                            |
| P2            |     1 | -8.8A, -30V p-channel MOSFET Fairchild SI4435DY (8 SO)                           |
| R1            |     1 | 0 ± 5% resistor (0805)                                                           |
| R2, R9        |     2 | 22k ± 5% resistors (0805)                                                        |
| R3            |     1 | 10k ± 5% resistor (0805)                                                         |
| R4, R11       |     2 | 150k ± 5% resistors (0805)                                                       |

## MAX1846 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| R5, R12       |     2 | 20m , 1W ± 1% sense resistors (2512) Vishay (Dale) WSL-2512-R020-F |
| R6            |     1 | 95.3k ± 1% resistor (0805)                                         |
| R7, R14       |     2 | 10k ± 1% resistors (0805)                                          |
| R8            |     1 | Not installed, resistor (0805)                                     |
| R10           |     1 | 8.2k ± 5% resistor (0805)                                          |
| R13           |     1 | 40.2k ± 1% resistor (0805)                                         |
| R15, R16      |     2 | 100 ± 5% resistors (0805)                                          |
| U1            |     1 | Inverting PWM controller (16 QSOP) Maxim MAX1847EEE                |
| U2            |     1 | Inverting PWM controller (10 µMAX) Maxim MAX1846EUB                |
| -             |     1 | PCB: MAX1846/47 EVALUATION KIT                                     |

## Quick Start

The MAX1846 EV kit is fully assembled and tested. Follow these steps to verify board operation.

Do not turn on the power supply until all connections are completed.

## MAX1847 Output (-12V)

- 1) Verify that a shunt is across pins 1-2 of jumper JU1 ( SHDN ).
- 2) Verify that a shunt is across pins 2-3 of jumper JU2 (SYNC).
- 3) Connect a voltmeter to the VOUT pad.
- 4) Preset a 3V to 5.5V DC power supply to 3V. Turn off power supply. This power supply should be able to supply 3A continuous current.
- 5) Connect the power supply to the VIN pad. Connect the supply ground to the GND pad.
- 6) Connect a load up to 400mA between VOUT and GND.
- 7) Turn on the power supply and gradually increase the input voltage through the 3V to 5.5V range.
- 8) Verify that VOUT is -12V throughout the +3V to +5.5V input voltage range.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Cooper Bussmann                        | 916-941-1117 | www.cooperet.com            |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX1846 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1846 Output (-5V)

- 1) Connect a voltmeter to the VOUT1 pad.
- 2) Connect a 'turned off' 12.0V DC power supply to the VIN1 pad. This power supply should be able to supply 2A continuous current.
- 3) Connect the supply ground to the GND pad.
- 4) Connect a load up to 2A between VOUT1 and GND.
- 5) Turn on the power supply and verify that VOUT1 is -5V.

## Detailed Description

The MAX1846 EV kit contains two high-efficiency, PWM inverting controllers. The MAX1846 is configured to convert a +12V input to a -5V output and is capable of delivering up to 2A of current. The MAX1847 is configured to convert a +3V to +5.5V input to -12V and will deliver in excess of 400mA depending on the input voltage. Both devices are inverting, current-mode, constant-frequency PWM controllers capable of operating at  frequencies from 100kHz to 500kHz with a simple resistor change (R4 and R11). The EV kit board is configured to operate at 300kHz. Note that for optimum efficiency and stability, other components may need to be optimized, depending on the operating frequency selected. Refer to the MAX1846/MAX1847 IC data sheet for more information. The MAX1847 can be synchronized to an external clock signal in the same frequency range and also has a shutdown feature. The

<!-- image -->

## MAX1846 Evaluation Kit

MAX1846 is in an ultra-compact 10-pin µMAX package and the MAX1847 is in a 16-pin QSOP package.

## Jumper Selection

## Shutdown Mode

The MAX1847 features a shutdown mode that reduces quiescent current. The 3-pin jumper (JU1) selects the shutdown mode for the MAX1847. To enable the MAX1847 shutdown mode, connect pins 2-3 on JU1 with the supplied shunt. For normal operation, connect pins 1-2.

## Synchronized Mode

The MAX1847 features a synchronized mode that enables the operating frequency to be controlled by an external clock. To utilize the synchronized mode, remove the shunt on jumper JU2 connecting pins 2-3 and place it on pins 1-2. Connect an external frequency source to the SYNC pad. The external frequency source must be a TTL level and have a 20% to 80% duty cycle.

Note: The value of R4 must program an internal oscillator  frequency lower than the frequency of the external clock. Refer to the MAX1846/MAX1847 IC data sheet for more information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1846 Evaluation Kit

Figure 1. MAX1847 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1846 Evaluation Kit

Figure 2. MAX1847 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1846 Evaluation Kit

<!-- image -->

Figure 3. MAX1846 EV Kit Component Placement GuideComponent Side

Figure 4. MAX1846 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX1846 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1846 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                    | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------|-----------------|
|                 0 | 2/02            | Initial release                                | -               |
|                 1 | 7/09            | Updated Component List and Component Suppliers | 1, 2            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7