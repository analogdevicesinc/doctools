<!-- lastmod 2022-08-02 -->
## General Description

The MAX1565 evaluation kit (EV kit) is a fully assembled and tested circuit board that accepts 1.5V to 3.6V input voltages and provides all the output voltages required for a typical digital still camera. The outputs consist of the main step-up output (3.35V), a step-down output (1.5V),  a  general-purpose 5V output, two outputs for charge-coupled device (CCD) and LCD bias, and an optional general-purpose output using the MAX1801 slave controller.

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                                                  |
|------------------------|-------|----------------------------------------------------------------------------------------------|
| C1                     |     1 | 6800pF, 25V X7R ceramic capacitor (0402) Murata GRP155R71E682K or equivalent                 |
| C2                     |     1 | 3300pF, 50V X7R ceramic capacitor (0402) Murata GRP155R71H332K or equivalent                 |
| C3                     |     1 | 0.01µF, 25V X7R ceramic capacitor (0402) Murata GRP155R71E103K or equivalent                 |
| C4, C5                 |     2 | 1000pF, 50V X7R ceramic capacitors (0402) Murata GRP155R71H102K or equivalent                |
| C6A, C6B               |     2 | 10µF, 10V X5R ceramic capacitors (1210) Taiyo Yuden LMK325BJ106MN or equivalent              |
| C7, C8                 |     2 | 1µF, 25V X7R ceramic capacitors (1206) TDK C3216X7R1E105K or equivalent                      |
| C9, C10, C17, C18, C19 |     5 | 10µF, 6.3V X5R ceramic capacitors (0805) Panasonic ECJ2FB0J106M or Taiyo Yuden JMK212BJ106MG |
| C11                    |     1 | 47µF, 6.3V X5R ceramic capacitor (1812) Taiyo Yuden JMK432BJ476MM                            |
| C12                    |     1 | 0.1µF, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104MA or equivalent              |

- ♦ 95% Efficiency
- ♦ 1.5V to 3.6V Input Voltage Range
- ♦ Main Step-Up Output: 3.35V or Adjustable
- ♦ Step-Down Output: 1.5V or Adjustable
- ♦ 5V General-Purpose Output
- ♦ CCD and LCD Bias Outputs (+15V/-7.5V)
- ♦ Power-Regulated Output for White LED Backlighting
- ♦ Optional General-Purpose Output Using the MAX1801 Slave Controller
- ♦ 1µA Shutdown Mode
- ♦ Internal Soft-Start Control
- ♦ Overload Protection for All Outputs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE            |
|--------------|--------------------|-----------------------|
| MAX1565EVKIT | -40 ° C to +85 ° C | 32 Thin QFN 5mm ✕ 5mm |

## Quick Start

Follow the steps below to verify operation of the MAX1565 EV kit. Do not turn on the power supply until all connections are completed:

- 1) Connect a series LED array or install surface-mount white LEDs in D7-D10. When connecting an LED array, connect the anode to LEDOUT+ and connect the cathode to LEDOUT-.
- 2) Preset the power supply to between 1.5V and 3.6V.
- 3) Turn off the power supply.
- 4) Connect the power-supply positive lead to IN.
- 5) Connect the power-supply ground lead to GND.
- 6) Connect loads from outputs OUTSD, OUT1, OUT3A, and OUT3B to GND. See Table 1 for maximum load currents.
- 7) To enable the main step-up output, verify that JU1 has pins 2 and 3 shorted.
- 8) Verify that JU2-JU8 have pins 1 and 2 shorted.
- 9) Turn on the power supply.
- 10) Use a voltmeter to verify the OUTSU voltage (3.35V).
- 11) Connect a load, if desired, from OUTSU to GND. See Table 1 for maximum load currents.
- 12) To verify other outputs, move JU2-JU5 to short pins 2 and 3. Use a voltmeter to verify output voltages.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

<!-- image -->

## Features

## MAX1565 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C13           |     1 | 1µF, 35V X5R ceramic capacitor (1206) Taiyo Yuden GMK316BJ105ML                      |
| C14           |     1 | 100pF, 50V C0G ceramic capacitor (0402) Murata GRM36C0G101K050AD or equivalent       |
| C15           |     0 | 1000pF ceramic capacitor (0402), not installed                                       |
| C16           |     0 | Not installed (0805)                                                                 |
| D1, D3, D5    |     3 | 500mA Schottky diodes (SOD-123) Central CMHSH5-2L or International Rectifier MBR0520 |
| D2            |     1 | 60V, 1A Schottky diode (SOD-123F) Central CMMSH1-60                                  |
| D4            |     1 | 40V, 500mA Schottky diode (SOD-123) Central CMHSH5-4                                 |
| D6            |     0 | Not installed (SOD-123)                                                              |
| D7-D10        |     0 | Not installed, surface-mount LEDs                                                    |
| JU1-JU8       |     8 | 3-pin headers                                                                        |
| JU9           |     0 | Not installed, PC board short                                                        |
| L1            |     1 | 3.3µH inductor Sumida CDRH6D38-3R3                                                   |
| L2            |     1 | 4.2µH inductor Sumida CDRH5D28-4R2                                                   |
| L3            |     1 | 2µH inductor TOKO A918CY-2R0M                                                        |
| L4            |     1 | 1.4µH inductor Sumida CDR43-1R4 or TOKO A918CY-1R5M                                  |
| L5            |     0 | Not installed                                                                        |
| N1            |     1 | N-channel MOSFET (6-pin SOT) Fairchild FDC637AN or International Rectifier IRLMS2002 |
| N2, N3        |     2 | N-channel MOSFETs (SOT23) Fairchild FDN337N                                          |
| N4            |     0 | Not installed (SOT23)                                                                |
| R1            |     1 | 46.4k Ω ± 1% resistor (0603)                                                         |
| R2            |     1 | 26.1k Ω ± 1% resistor (0603)                                                         |
| R3            |     1 | 8.2k Ω ± 5% resistor (0603)                                                          |
| R4, R5        |     2 | 10k Ω ± 5% resistors (0603)                                                          |
| R6, R10, R12  |     0 | Not installed, PC board shorts (0603)                                                |

## Component List (continued)

| DESIGNATION            |   QTY | DESCRIPTION                                            |
|------------------------|-------|--------------------------------------------------------|
| R7, R11, R13, R17, R18 |     0 | Not installed (0603)                                   |
| R8                     |     1 | 1M Ω ± 1% resistor (0603)                              |
| R9                     |     1 | 90.9k Ω ± 1% resistor (0603)                           |
| R14                    |     1 | 51k Ω ± 5% resistor (0603)                             |
| R15                    |     1 | 2.2k Ω ± 5% resistor (0603)                            |
| R16                    |     0 | 10k Ω ± 5% resistor (0603), not installed              |
| R19                    |     1 | 36.5k Ω ± 1% resistor (0603)                           |
| R20                    |     1 | 33 Ω ± 5% resistor (0603)                              |
| T1                     |     1 | Transformer Sumida CLQ72 type, sample number 6333-T507 |
| U1                     |     1 | MAX1565ETJ (32-pin thin QFN 5mm x 5mm)                 |
| U2                     |     0 | Not installed (8-pin SOT23), MAX1801                   |
| -                      |     8 | Shunts                                                 |
| -                      |     1 | MAX1565ETJ EV kit PC board                             |

## Table 1. Output Voltages and Maximum Currents

| OUTPUT             | VOLTAGE (V)   | MAXIMUM CURRENT (mA)   |
|--------------------|---------------|------------------------|
| OUTSU              | 3.35          | 500 (Note 1)           |
| OUTSD              | 1.5           | 350                    |
| OUT1               | 5             | 500                    |
| LEDOUT+ to LEDOUT- | 16 (Note 2)   | 15                     |
| OUT3A              | 15            | 20                     |
| OUT3B              | -7.5 (Note 3) | 30                     |

Note 1: If both OUTSU and OUTSD are operating, subtract half the OUTSD load current from the maximum load capability of OUTSU.

Note 2: With four white LEDs connected in series from LEDOUT+ to LEDOUT-, this output is regulated to approximately 60mW per LED. With typical white LEDs, this is approximately 16V at 15mA. With an open circuit, LEDOUT+ is approximately 30V.

Note 3: Only the 15V output is fed back to the controller regulation point. A small preload (at least 5mA) is needed for the -7.5V output to be in regulation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

## Main Step-Up Output (OUTSU)

The main output (OUTSU) powers the internal circuitry of  the  MAX1565 and must reach its regulation voltage before any other output turns on. To enable OUTSU, short pins 2 and 3 of JU1. When JU1 pins 1 and 2 are shorted, all outputs shut down and the IC is in low-current shutdown mode.

When pins 1 and 2 of JU8 are shorted, OUTSU is preset to 3.35V. If a different output voltage is desired, see the Adjusting the Main Step-Up Output Voltage section.

## Step-Down Output (OUTSD)

The step-down output (OUTSD) is preset to 1.5V. To enable OUTSD, short pins 2 and 3 of JU2. To shut down OUTSD, short pins 1 and 2 of JU2. For the preset 1.5V output, short pins 1 and 2 of JU7. To adjust the output voltage, see the Adjusting the Step-Down Output Voltage section.

## Step-Down OK (SDOK)

The step-down OK output (SDOK) is an active-low, open-drain output that is low until the step-down converter has completed soft-start. For more details on SDOK, refer to the MAX1565 data sheet.

## OUT1

OUT1 is a regulated 5V output. To enable OUT1, connect pins 2 and 3 of JU3. If an output voltage other than 5V is desired, see the Adjusting the OUT1 Voltage section.

## LED Outputs (LEDOUT+, LEDOUT-)

LEDOUT+ and LEDOUT- are designed to drive a series array of white LEDs for backlighting. Connect an array consisting of two to six white LEDs in series to these outputs. The anode side connects to LEDOUT+ and the cathode side connects to LEDOUT-. Alternately, individual surface-mount white LEDs can be installed in D7-D10. If only two or three LEDs are connected, short the pads of the remaining unpopulated LEDs. With four white LEDs installed, the LED power is regulated to approximately 60mW each. To enable the LED output, short pins 2 and 3 of JU4. To turn off the LED output, short pins 1 and 2 of JU4. To adjust the LED brightness, see the Adjusting the LED Brightness section.

## CCD Outputs (OUT3A, OUT3B)

OUT3A and OUT3B provide the voltages necessary for CCD bias. OUT3A is +15V, and OUT3B is -7.5V. These voltages are generated using a flyback transformer. The output voltage at OUT3A is regulated, while the voltage at OUT3B is controlled by the turns ratio of the transformer. If OUT3B is not loaded while OUT3A is loaded at 20mA or more, OUT3B is then -10V (typ). A

<!-- image -->

## MAX1565 Evaluation Kit

## Table 2. Jumper Functions

| JUMPER   | PINS 1 AND 2              | PINS 2 AND 3        |
|----------|---------------------------|---------------------|
| JU1      | All outputs are shut down | OUTSU enabled       |
| JU2      | OUTSD shut down           | OUTSD enabled       |
| JU3      | OUT1 shut down            | OUT1 enabled        |
| JU4      | LEDOUT shut down          | LEDOUT enabled      |
| JU5      | OUT3A/OUT3B shut down     | OUT3A/OUT3B enabled |
| JU6      | OUT1 set to 5V            | OUT1 adjustable     |
| JU7      | OUTSD set to 1.5V         | OUTSD adjustable    |
| JU8      | OUTSU set to 3.35V        | OUTSU adjustable    |

load of 5mA (min) is required on OUT3B to maintain regulation at -7.5V. To enable OUT3A/OUT3B, short pins 2 and 3 of JU5. To turn off these outputs, short pins 1 and 2 of JU5.

## Customizing the MAX1565 Evaluation Kit

## Optional Step-Up Controller (OUT4)

A MAX1801 step-up slave controller can be used with the MAX1565 EV kit to generate an additional output. To use this feature, install a MAX1801 in U2 on the solder side of the PC board. Contact Maxim for free samples of the MAX1801. Also install components N4, D6, L5, C15, C16, R16, R17, and R18. Refer to the MAX1801 data sheet for information on selecting these components.

## Adjusting the Main Step-Up Output Voltage

The main step-up output (OUTSU) can be adjusted from 2.7V to 5.5V using the following procedure:

- 1) Short pins 2 and 3 of JU8.
- 2) Cut the PC board trace that shorts the pads of R12 (located on the solder side of the PC board).
- 3) Select a value for R13 between 10k Ω and 100k Ω .
- 4) Solve for R12:

<!-- formula-not-decoded -->

- 5) Install R12 and R13.

Adjusting the Step-Down Output Voltage The step-down output voltage (OUTSD) can be set from 1.25V to VOUTSU using the following procedure:

- 1) Short pins 2 and 3 of JU7.
- 2) Cut the PC board trace that shorts the pads of R10 (located on the solder side of the PC board).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1565 Evaluation Kit

- 3) Select a value for R11 between 10k Ω and 100k Ω .
- 4) Solve for R10:

<!-- formula-not-decoded -->

- 5) Install R10 and R11.

## Adjusting the OUT1 Voltage

OUT1 can be set to any voltage above 1.25V. Note that OUT1 rises above its regulation voltage if the input voltage is greater than what OUT1 is set to. Use the following procedure to set VOUT1:

- 1) Short pins 2 and 3 of JU6.
- 2) Cut the PC board trace that shorts the pads of R6 (located on the solder side of the PC board).
- 3) Select a value for R7 between 10k Ω and 100k Ω .
- 4) Solve for R6:

<!-- formula-not-decoded -->

- 5) Install R6 and R7.

## Adjusting the LED Brightness

## Constant Power Regulation

The MAX1565 EV kit uses a three-resistor feedback connection that regulates the LEDs at a nearly constant power. This configuration also protects the circuit by limiting the voltage at LEDOUT+ in case of an open circuit. Use the following procedure to set the LED power:

- 1) Select the desired power per LED (PLED) and the number of LEDs to be used (n), between two and six.
- 2) Determine the minimum and maximum LED forwardvoltage drop (VFMIN and VFMAX) at the desired power. Refer to the LED data sheet for this information. For typical white LEDs, these are approximately VFMIN = 3V and VFMAX = 4V.
- 3) Find the minimum and maximum LED current, assuming a constant power of PLED:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

- 4) Calculate the value for R20:

<!-- formula-not-decoded -->

- 5) Choose a value for R15. The MAX1565 EV kit has a 2.2k Ω resistor installed for R15. In most cases, it is not necessary to change R15.
- 6) Calculate the value for R14:

<!-- formula-not-decoded -->

- 7) Find the open-circuit voltage of the circuit. To prevent damage to the EV kit when the LEDs are not installed, make sure this voltage is less than 30V:

<!-- formula-not-decoded -->

- 8) Install the new resistors.

## Constant-Current Regulation

The MAX1565 EV kit can be configured to regulate the current through the LEDs. Note that this connection does not include the overvoltage protection provided by the constant-power design. Two to six LEDs must be connected from LEDOUT+ to LEDOUT-. Use the following procedure to configure the EV kit for constant-current regulation:

- 1) Remove R14.
- 2) Short the pads of R15.
- 3) Calculate the value for R20:

<!-- formula-not-decoded -->

- 4) Replace R20 with the new value resistor.

## Adjusting the CCD Output Voltages

A custom flyback transformer is used to generate outputs OUT3A and OUT3B. To change these outputs, replace T1 with a transformer designed for the new output voltages. OUT3A is regulated, while OUT3B depends on the turns ratio of the transformer. To set a new regulation voltage for OUT3A, use the following procedure:

- 1) Select a value for R9 between 10k Ω and 100k Ω .
- 2) Solve for R8:

<!-- formula-not-decoded -->

- 3) Replace R8 and R9.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | www.centralsemi.com   |
| Fairchild Semiconductor | -            | www.fairchildsemi.com |
| International Rectifier | 310-322-3331 | www.irf.com           |
| Kamaya                  | 260-489-1533 | www.kamaya.com        |
| Murata                  | 814-237-1431 | www.murata.com        |
| Panasonic               | 714-373-7939 | www.panasonic.com     |
| Sumida                  | 847-956-0666 | www.sumida.com        |
| Taiyo Yuden             | 408-573-4150 | www.t-yuden.com       |
| TDK                     | 847-803-6100 | www.component.tdk.com |
| TOKO                    | 847-297-0070 | www.toko.com          |

Note: Indicate that you are using the MAX1565 when contacting these component suppliers.

<!-- image -->

Figure 1. MAX1565 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1565 Evaluation Kit

## Changing the Switching Frequency

The switching frequency of the MAX1565 is adjustable. Typically, frequencies from 400kHz to 500kHz provide a good compromise between efficiency and component size. To change the frequency, replace C14 and R19. Refer to the MAX1565 data sheet for information on selecting values for these components.

## MAX1565 Evaluation Kit

<!-- image -->

Figure 2. MAX1565 EV Kit Schematic (Sheet 2 of 2)

Figure 3. MAX1565 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1565 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX1565 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 7. MAX1565 EV Kit PC Board Layout-Inner Layer 3

<!-- image -->

## MAX1565 Evaluation Kit

Figure 6. MAX1565 EV Kit PC Board Layout-Inner Layer 2

<!-- image -->

Figure 8. MAX1565 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7