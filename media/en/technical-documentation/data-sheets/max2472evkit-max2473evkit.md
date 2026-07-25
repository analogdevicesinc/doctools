<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX2472/MAX2473 evaluation kits (EV kits) simplify  evaluation  of  the  MAX2472/MAX2473 VCO buffers. They enable performance testing and require no additional support circuitry. All inputs and outputs use SMA connectors to facilitate connection of RF test equipment.

The MAX2472 EV kit is assembled with the MAX2472 and provides a high-impedance input and a pair of open-collector outputs. The EV kit includes a matching network tuned for 900MHz. The MAX2473 EV kit is assembled with the MAX2473 and provides a highimpedance input, a single open-collector output, and a bias control input for setting the output power. Output matches for 600MHz, 1900MHz, or 2400MHz are achieved by replacing the matching components with values provided in the MAX2472/MAX2473 data sheet.

## MAX2472 Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                 |
|----------------|-------|-------------------------------------------------------------|
| C1, C4         |     2 | 1pF ±0.1pF ceramic capacitors (0603) Murata GRM39COG1R0B50V |
| C2, C5, C9     |     3 | 0.01µF 5% ceramic capacitors (0603) Murata GRM39X7R103J50V  |
| C3, C6, C7, C8 |     4 | 100pF 5% ceramic capacitors (0603) Murata GRM39COG101J50V   |
| C10            |     1 | 1µF 5% ceramic capacitor (0805)                             |
| L1             |     1 | 12nH 5% inductor (0603) Coilcraft 0603HS-12NTJBC            |
| Z1             |     1 | 12nH 5% inductor (0603) Coilcraft 0603HS-12NTJBC            |
| R1-R5          |     0 | Not installed                                               |
| R6, R7         |     2 | 0 Ω resistors (0603)                                        |
| JU1            |     0 | Not installed                                               |
| VCC, GND       |     2 | Test points                                                 |
| IN, OUT1, OUT2 |     3 | SMA connectors (PC edge-mount) EF Johnson 142-0701-801      |
| U1             |     1 | MAX2472EUT (6-pin SOT23, top mark AAAZ)                     |
| None           |     1 | MAX2472/MAX2473 PC board                                    |

Features

- ' Easy Evaluation of MAX2472/MAX2473
- ' +2.7V to +5.5V Single-Supply Operation
- ' Variable Bias Control (MAX2473)
- ' Single (MAX2473) or Dual (MAX2472) OpenCollector Outputs
- ' All Critical Peripheral Components Included

## Ordering Information

| PART          | TEMP. RANGE    | IC PACKAGE   | SOT TOP MARK   |
|---------------|----------------|--------------|----------------|
| MAX2472 EVKIT | -40°C to +85°C | SOT23-6      | AAAZ           |
| MAX2473 EVKIT | -40°C to +85°C | SOT23-6      | AABA           |

## MAX2473

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| C1            |     1 | 1pF ±0.1pF ceramic capacitor (0603) Murata GRM39COG1R0B50V |
| C2, C9        |     2 | 0.01µF 5% ceramic capacitors (0603) Murata GRM39X7R103J50V |
| C3, C7, C8    |     3 | 100pF 5% ceramic capacitors (0603) Murata GRM39COG101J50V  |
| C4, C5, C6    |     0 | Not installed                                              |
| C10           |     1 | 1µF 5% ceramic capacitor (0805)                            |
| L1            |     1 | 12nH 5% inductor (0603) Coilcraft 0603HS-12NTJBC           |
| Z1            |     1 | 0 Ω resistor (0603)                                        |
| R1, R6        |     2 | 0 Ω resistors (0603)                                       |
| R2            |     1 | 11k Ω 5% resistor (0603)                                   |
| R3            |     1 | 15k Ω 5% resistor (0603)                                   |
| R4            |     1 | 23k Ω 5% resistor (0603)                                   |
| R5, R7        |     0 | Not installed                                              |
| JU1           |     1 | 6-pin header                                               |
| None          |     1 | Shunt (JU1)                                                |
| VCC, GND      |     2 | Test points                                                |
| IN, OUT1      |     2 | SMA connectors (PC edge-mount) EF Johnson 142-0701-801     |
| U1            |     1 | MAX2473EUT (6-pin SOT23, top mark AABA)                    |
| None          |     1 | MAX2472/MAX2473 PC board                                   |

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX2472/MAX2473 Evaluation Kits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2472/MAX2473 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  test  equipment  recommended to verify operation of the MAX2472/MAX2473. It is intended as a guide only, and some substitutions are possible.

- DC power supply capable of supplying a minimum of 10mA at +2.7V to +5.5V
- RF spectrum analyzer capable of making measurements over the bandwidth of the MAX2472/MAX2473 as well as a few harmonics (if desired), such as the 6GHz HP8561E
- RF signal generator capable of delivering 0dBm output power from 500MHz to 2500MHz, such as the HP8648C signal generator
- 50 Ω SMA termination
- Two 50 Ω SMA cables

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

This section describes the circuitry surrounding the IC in  the  MAX2472/MAX2473 EV kits. For more detailed information covering device operation, please consult the MAX2472/MAX2473 data sheet.

Figure 1 shows the schematic for the MAX2472/ MAX2473 EV kits. Input capacitors C7 and C8 are 100pF DC-blocking capacitors; this value contributes minimal reactance to the signal paths, down to 500MHz. Capacitors C9 and C10 form the VCC decoupling network. Note the location of each component; a relatively large 1µF tantalum capacitor, C10, is located near the VCC connector. Placed near the device, a substantially  smaller  0.01µF decoupling capacitor, C9, reduces any high-frequency interference. The EV kits include pad R5 to facilitate simple termination of the input.

Both the MAX2472 and MAX2473 EV kits feature a bias and tuning network at OUT1. Capacitors C2 and C3 form an output bias supply decoupling network. Inductor L1 acts as an RF choke while providing DC bias and, in conjunction with C1, forms a narrowband matching network. The EV kits are output matched for 900MHz operation. The MAX2472 has an identical biassupply decoupling network and matching network for OUT2. For the MAX2473, OUT2's matching network is replaced with a set of jumpers to allow the selection of a bias resistor for the BIAS pin. Set the appropriate jumper at JU1 to select between 11k Ω , 15k Ω , or 23k Ω (R2, R3, and R4, respectively).

## Component Suppliers

| SUPPLIER     | PHONE        | FAX          | URL                       |
|--------------|--------------|--------------|---------------------------|
| Coilcraft    | 800-322-2645 | 847-639-1469 | http://www. coilcraft.com |
| E.F. Johnson | 402-474-4800 | 402-474-4858 | http://www.ef johnson.com |
| Murata       | 770-436-1300 | 770-436-3030 | http://www. murata.com    |

## Connections and Setup

- 1) Verify  the  DC  power  supply is  set  to  no  more  than +5.5V and is off before connecting the supply to the EV kit. A good starting voltage is +3.0V. Connect the power supply between VCC and GND, then turn on the power supply.
- 2) Set the output power of the signal generator to -20dBm at 900MHz. Disable the generator's output, then connect the output of the signal generator to the IN SMA connector of the MAX2472/MAX2473 EV kit board. For the MAX2472, terminate OUT2 with a 50 Ω termination. For the MAX2473, set the center jumper at JU1 to set RBIAS = 15k Ω .
- 3) Connect OUT1 to the spectrum analyzer's RF input.

## Analysis

- 1) Adjust the frequency span, center frequency, and amplitude of the spectrum analyzer to observe the signal peak at 900MHz; the output signal power should read approximately -9dBm. The first harmoni c  (1800MHz)  will  be  approximately  -35dBm (-25dBc).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2472/MAX2473 Evaluation Kits

<!-- image -->

Figure 1. MAX2472/MAX2473 EV Kit Schematic

Figure 2. MAX2472/MAX2473 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

<!-- image -->

Figure 3. MAX2472/MAX2473 EV Kit PC Board LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2472/MAX2473 Evaluation Kits

<!-- image -->

Figure 4. MAX2472/MAX2473 EV Kit PC Board Layout-Main Ground Plane

Figure 5. MAX2472/MAX2473 EV Kit PC Board Layout-VCC Plane

<!-- image -->

Figure 6. MAX2472/MAX2473 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4