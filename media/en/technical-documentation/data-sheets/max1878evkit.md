<!-- lastmod 2022-08-02 -->
## General Description

The MAX1878 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX1878 dual-output, step-up, and step-down DCDC converter. The main output is configured for 1.8V and provides up to 400mA of current. The LCD bias output is configured for 18V and provides up to 10mA. The EV kit can support the dual output with an input voltage range of 2.0V to 5.5V.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ± 10%, 6.3V X5R ceramic capacitor (1206) TDK C3216X5R0J106KT or Taiyo Yuden JMK316BJ106KL |
| C2            |     1 | 1.0µF ± 10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ105KA or TDK C1608X5R1A105K |
| C3            |     1 | 0.1µF ± 10%, 50V X7R ceramic capacitor (0805) Taiyo Yuden UMK212BJ104KG or TDK C2012X7R1H104KT |
| C4            |     1 | 22µF ± 10%, 10V tantalum capacitor (B) AVX TPSB226K010R0500                                    |
| C5            |     1 | 5.0pF, 50V COG ceramic capacitor (0603) TDK C1608COG1H050C or Murata GRM1885C1H5R0JA01         |
| C6            |     1 | 22pF, 50V COG ceramic capacitor (0603) TDK C1608COG1H220JT or Murata GRM1885C1H220KA01         |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| D1            |     1 | 200mA diode (SOT23) Fairchild MMBD4148 (Top mark - 5H)  |
| JU1, JU2      |     2 | 3-pin headers                                           |
| L1, L2        |     2 | 10µH, 550mA inductors                                   |
| R1            |     1 | 28k Ω ± 1% resistor (0603)                              |
| R2            |     1 | 63.4k Ω ± 1% resistor (0603)                            |
| R3            |     1 | 3.65M Ω ± 1% resistor (0603) Venkel CR0603-16W-3654-F-T |
| R4            |     1 | 267k Ω ± 1% resistor (0603)                             |
| R5            |     1 | 10 Ω ± 5% resistor (0603)                               |
| R6            |     1 | 2M Ω ± 5% resistor (0603)                               |
| U1            |     1 | MAX1878EGC (12-pin QFN 4 x 4 EP) Top mark-AAAO          |
| None          |     2 | Shunts (JU1, JU2)                                       |
| None          |     1 | MAX1878 PC board                                        |
| None          |     1 | MAX1878 data sheet                                      |
| None          |     1 | MAX1878 EV kit data sheet                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 1

<!-- image -->

Features

- ♦ Dual Output Voltages 1.8V Main Output at 400mA 18V LCD Bias Output at 10mA
- ♦ Adjustable Output Voltages
- ♦ 2.0V to 5.5V Input Voltage Range
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

* EP = Exposed pad

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1878EVKIT | 0°C to +70°C  | 12 QFN-EP*   |

## MAX1878 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Fairchild   | 888-522-5372 | 408-822-2104 | www.fairchildsemi.com |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-803-6296 | www.component.tdk.com |
| Venkel      | 800-950-8365 | 512-794-0087 | www.venkel.com        |

Note:

Please indicate that you are using the MAX1878 when contacting these component suppliers.

## Quick Start

The MAX1878 EV kit is a fully assembled and tested surface-mount board.  Follow the steps below for board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU1 (ONLCD) and JU2 (ON) to enable the LCD output and the main output, respectively.
- 2) Connect a voltmeter across the VMAIN pad and the nearest GND pad to monitor the main output voltage.
- 3) Connect a voltmeter across the VLCD pad and the nearest GND pad to monitor the LCD output voltage.
- 4) Connect a 2.0V to 5.5V supply to the VIN pad. Connect the ground to the GND pad.
- 5) Turn on the power supply and verify that the main output voltmeter is at 1.8V and the VLCD output is at 18V.

## Table 1. Jumper Table

| JUMPER   | STATUS   | PIN CONNECTION         | EV KIT OPERATION      |
|----------|----------|------------------------|-----------------------|
| JU1      | 1 and 2  | ONLCD connected to AIN | VLCD output enabled   |
| JU1      | 2 and 3  | ONLCD connected to GND | VLCD output disabled  |
| JU2      | 1 and 2  | ON connected to AIN    | VMAIN output enabled  |
| JU2      | 2 and 3  | ON connected to GND    | VMAIN output disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

The MAX1878 EV kit is a fully assembled and tested surface-mount circuit containing a dual-output, stepdown, and step-up DC-DC converter. The main output (VMAIN) is configured to supply 400mA (typ) at 1.8V and the LCD bias output (VLCD) is configured to supply 10mA (typ) at 18V. The EV kit circuit requires a power supply with a 2.0V to 5.5V voltage range and rated for 0.5A. VMAIN and VLCD output voltages are adjustable.

## Adjustable Outputs

The VMAIN output voltage is set to 1.8V by resistors R1 and R2. VMAIN can be adjusted to a different voltage (1.25 to VIN) by replacing resistors R1 and R2. Refer to Setting the Output Voltage section of the MAX1878 data sheet for instructions on selecting R1 and R2.

The 18V LCD bias output voltage is set with voltagedivider resistors R3 and R4. VLCD can be adjusted to a different voltage (from 1V above VIN to 28V) by replacing resistors R3 and R4. Refer to Setting the Output Voltage section of the MAX1878 data sheet for instructions on selecting R3 and R4.

## Enable/Disable

The EV kit contains two 3-pin jumpers (JU1 and JU2) that allow the user to enable and disable the main output (VMAIN) and the LCD output (VLCD). See Table 1 for jumper configurations.

## MAX1878 Evaluation Kit

<!-- image -->

Figure 1. MAX1878 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1878 Evaluation Kit

<!-- image -->

Figure 2. MAX1878 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1878 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1878 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4