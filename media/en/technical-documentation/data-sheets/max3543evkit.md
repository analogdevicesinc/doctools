<!-- lastmod 2022-08-02 -->
## General Description

The MAX3543 evaluation kit (EV kit) simplifies the testing  and  evaluation  of  the  MAX3543  hybrid  television tuner.  The  EV  kit  is  fully  assembled  and  tested  at  the factory. Standard 50 I SMA connectors are included on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a list of components for the EV kit, and artwork for each layer of the PCB.

<!-- image -->

## MAX3543 Evaluation Kit

Features

- S Easy Evaluation of the MAX3543
- S 50 I SMA Connectors
- S All Critical Peripheral Components Included
- S Fully Assembled and Tested
- S PC Control Software

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3543EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                                             |   QTY | DESCRIPTION                                               |
|-------------------------------------------------------------------------|-------|-----------------------------------------------------------|
| ATV, DTV, JP3, JP4, JP5, JP7                                            |     6 | Single in-line headers, 100 mil centers Sullins PEC36SAAN |
| C0                                                                      |     1 | 8.2pF Q 0.1pF capacitor (0402) Murata GRM1555C1H8R2B      |
| C1                                                                      |     1 | 1 F F Q 10% capacitor (0402) Murata GRM155R61A105K        |
| C2-C5, C10, C12, C13, C15, C19, C25, C27, C32-C35, C44, C45, C100, C101 |    19 | 1000pF Q 10% capacitors (0402) Murata GRM155R71H102K      |
| C6, C8                                                                  |     2 | 39pF Q 5% capacitors (0402) Murata GRM1555C1H390J         |
| C7                                                                      |     1 | 2pF Q 0.1pF capacitor (0402) Murata GRM1555C1H2R0B        |
| C9                                                                      |     1 | 47 F F Q 10% capacitor (1210) Murata GRM32CR61A476K       |
| C11                                                                     |     1 | 4.7pF Q 0.1pF capacitor (0402) Murata GRM1555C1H4R7B      |
| C14, C23, C29, C31, C36, C60                                            |     0 | Not installed, ceramic capacitors (0402)                  |
| C16                                                                     |     1 | 0.01 F F Q 10% capacitor (0402) Murata GRM155R71E103K     |

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C17           |     1 | 5.6pF Q 0.1 capacitor (0402) Murata GRM1555C1H5R6B                                  |
| C18           |     1 | 10 F F Q 10% tantalum capacitor (2012) (Rcode/case 0805 compatible) AVX TAJR106K006 |
| C20           |     1 | 0.47 F F Q 10% capacitor (0402) Murata GRM155R61A474K                               |
| C21           |     1 | 1500pF Q 10% capacitor (0402) Murata GRM155R71H152K                                 |
| C22           |     1 | 33000pF Q 10% capacitor (0402) Murata GRM155R71A333K                                |
| C24, C26, C30 |     3 | 22pF Q 5% capacitors (0402) Murata GRM1555C1H220J                                   |
| C28           |     0 | Not installed, ceramic capacitor (0603)                                             |
| C37           |     1 | 100pF Q 5% capacitor (0402) Murata GRM1555C1H101J                                   |
| C38, C39      |     2 | 47pF Q 5% capacitors (0402) Murata GRM1555C1H470J                                   |
| C40           |     1 | 120pF Q 5% capacitor (0402) Murata GRM1555C1H121J                                   |
| C41, C42      |     2 | 56pF Q 5% capacitors (0402) Murata GRM1555C1H560J                                   |
| C43           |     1 | 180pF Q 5% capacitor (0402) Murata GRM1555C1H181J                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX3543 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION     |   QTY | DESCRIPTION                                                             |
|-----------------|-------|-------------------------------------------------------------------------|
| C61             |     1 | 0.1 F F Q 10% capacitor (0603) Murata GRM188R71E104K                    |
| GND, GND1, GND2 |     3 | PC mini (black) test points Keystone 5001                               |
| IFVGC, RFVGC    |     2 | PC mini (white) test points Keystone 5002                               |
| J1, J3, J4      |     3 | SMA end-launch jack receptacles, 0.062in Emerson (Johnson) 142-0701-801 |
| J2, J5, J6      |     0 | Not installed, SMA end-launch jacks                                     |
| JP2             |     1 | Dual in-line header, 100 mil centers Sullins PEC36DAAN                  |
| JP6, REFOUT     |     0 | Not installed, 2-pin headers                                            |
| L0, L1          |     2 | 15nH Q 5% inductors (0603) Murata LQG18HN15J00                          |
| L2              |     1 | 68nH Q 5% inductor (0603) Murata LQG18HN68NJ00                          |
| L3              |     1 | 150nH Q 5% inductor (0603) TOKO LL1608-FSLR15J                          |
| L4, L7          |     2 | 270nH Q 5% inductors (0603) TOKO LL1608-FSLR27J                         |
| L5              |     1 | 12nH Q 5% inductor (0603) Murata LQG18HN12NJ00                          |
| L6              |     1 | 18nH Q 5% inductor (0603) Murata LQG18HN18NJ00                          |
| L8              |     1 | 47nH Q 5% inductor (0603) Murata LQG18HN47NJ00                          |
| L9              |     0 | Not installed, inductor                                                 |
| L12             |     1 | 180nH Q 5% inductor (0603) TOKO LL1608-FSLR18J                          |
| L13             |     1 | 120nH Q 5% inductor (0603) TOKO LL1608-FSLR12J                          |
| L14             |     1 | 100nH Q 5% inductor (0603) TOKO LL1608-FSLR10J                          |
| R0              |     1 | 560 I Q 5% resistor (0402)                                              |

| DESIGNATION                                    |   QTY | DESCRIPTION                                                         |
|------------------------------------------------|-------|---------------------------------------------------------------------|
| R1, R3, R5, R6, R12, R14-R17, R20, R22         |     0 | Not installed, resistors (0402)                                     |
| R2, R23                                        |     2 | 390 I Q 1% resistors (0402)                                         |
| R4, R8                                         |     2 | 1k I Q 1% resistors (0402)                                          |
| R7                                             |     1 | 442 I Q 1% resistor (0402)                                          |
| R9, R18, R24                                   |     3 | 100 I Q 5% resistors (0402)                                         |
| R10                                            |     1 | 86.6 I Q 1% resistor (0402)                                         |
| R11                                            |     1 | 43.2 I Q 1% resistor (0402)                                         |
| R13                                            |     1 | 499 I Q 1% resistor (0402)                                          |
| R19, R21, R28, R29, R42, R50, R54-R59, R61-R64 |    16 | 0 I Q 5% resistors (0402)                                           |
| R25                                            |     1 | 348 I Q 1% resistor (0402)                                          |
| R49                                            |     1 | 910 I Q 5% resistor (0402)                                          |
| R53                                            |     1 | 15 I Q 5% resistor (0402)                                           |
| R60                                            |     1 | 600 I Q 25% ferrite bead (0402) Murata BLM15AG601SN1                |
| SCL, SDA, VTUNE                                |     0 | Not installed, ST single male headers                               |
| T1                                             |     1 | Balun (4:1 impedance ratio) TOKO #617PT-1664                        |
| U1                                             |     1 | Hybrid television tuner (40 TQFN-EP*) Maxim MAX3543CTL+             |
| Y2                                             |     1 | 16MHz crystal (HC49/U) Suntsu SCX331-16.000MHz                      |
| VCC, VDD                                       |     2 | PC mini (red) test points Keystone 5000                             |
| -                                              |     2 | 2-position shorting jumpers (JP3, JP5), 0.1in center Kycon SX1100-B |
| -                                              |     1 | INTF3000+ interface board with ribbon cable                         |
| -                                              |     1 | PCB: MAX3543 EVALUATION KIT+                                        |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3543 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avx.com                 |
| Emerson Network Power                  | 507-833-9922 | www.emersonnetworkpower.com |
| Keystone Electronics Corp.             | 209-796-2032 | www.keyelco.com             |
| Kycon, Inc.                            | 408-494-0330 | www.kycon.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| Suntsu Frequency Control               | 949-305-0220 | www.suntsuinc.com           |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX3543 when contacting these component suppliers.

## Quick Start

The  MAX3543  EV  kit  is  fully  assembled  and  factory tested.  Follow  the  steps  in  the Connections and Setup section for proper device evaluation.

## Test Equipment Required

- Power supply capable of supplying at least 300mA, +3.3V
- RF  signal  generator  capable  of  delivering  at  least 0dBm of output power at the operating frequency
- RF  spectrum  analyzer  capable  of  covering  the operating frequency range of the device
- 50 I SMA cables
- User-supplied PC with Windows XP® or later operating system and an available USB port
- USB cable with USB-A male connector on one end and USB-B male connector on the other end
- (Optional)  Dual-output  power  supply  capable  of supplying up to 3V at &lt; 1mA (to apply gain-control voltages directly).
- (Optional) Ammeter to measure supply current

## Connections and Setup

This  section  provides  a  step-by-step  guide  to  testing the basic functionality of the EV kit in DVB-T mode. For user's convenience, Figure 1 illustrates critical connectors on the INTF3000+ USB interface board and the EV kit. Caution: Do not turn on DC power or RF signal generator until all connections are completed.

- 1) Connect the provided 20-pin ribbon cable between the INTF3000+ board (J1 labeled as INTF2400) and the EV kit JP2 connector. Make sure that pin 1 of the

<!-- image -->

INTF3000+ board J1 connector is connected to pin 1 of the EV kit JP2 connector (see the red wire on the 20-pin ribbon cable in Figure 1).

- 2) Make sure that JU1 on the INTF3000+ board is in the 'VDEV' position. Verify that the J6 and J7 jumpers are not present.
- 3) Connect  the  USB  cable  between  the  PC's  USB port and the INTF3000+ board. The red light on the INTF3000+ board should light once briefly when the board is connected to the PC. It also blinks periodically as the EV kit software communicates with the board.
- 4) Verify that jumpers JP3 and JP5 are installed on the EV kit.
- 5) With its  output  disabled,  set  the  DC  power  supply to  +3.3V.  Connect  the  power  supply  to  the  VCC (through an ammeter if desired) and GND terminals on  the  EV  kit.  If  available,  set  the  current  limit  to 300mA.
- 6) With its output disabled, connect the output of the RF signal generator to the SMA connector labeled 'RFIN' (J1) on the EV kit.
- 7) Connect the IFOUT\_DTV output (J3) to a spectrum analyzer.
- 8) Turn on the +3.3V power supply. The supply current should read approximately 260mA. If an ammeter is used, be sure to adjust the power supply to account for any voltage drop across the ammeter.
- 9) Install the IC's control software provided by Maxim.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

Windows is a registerered trademark of Microsoft Corp.

## MAX3543 Evaluation Kit

- 10)  Maxim  also  provides  a  FactorySettings.ini  file  that includes  predefined  MAX3543  register  configurations for different TV standards (DVB-T, DVB-C, PAL, SECAM). Manually copy the FactorySettings.ini file into the directory where the IC software is installed. The path should be 'C:\Program Files\Max3543\' or similar.
- 11)  Launch the IC control software.
- 12)  Verify  that  the  I²C  write  address  setting  in  the  EV kit  software  (Options → I²C  Write  Address  menu item) matches the EV kit hardware configuration. By default,  the  EV  kit  comes  with  no  jumper  installed on the JP4 header. This corresponds to the address setting of 0xC2.
- 13)  Verify  that  the  software  shows  'Board/USB-Online' in  a  green box at the bottom of the window. If the status  is  'OFFLINE-Click  Here,'  then  verify  all  the connections described above in steps 1 through 8.
- 14)  Go  to  the  Options → External  IF  Bandpass  Filter menu item and select the IF bandpass filter used at the IFOUT1 output on the EV kit. Most of the EV kits use a differential LC filter. It is important to select the appropriate  mode  to  ensure  that  the  right  IFOUT1 output driver (differential vs. single-ended) is used to drive the bandpass filter.
- 15)  Go to the Synth tab and set the REF FREQ to match the crystal frequency (in MHz) on the EV kit. Most of the EV kits use 16MHz crystals.
- 16)  Set the IF FREQ to the desired value. Note that the on-chip  bandpass  filter  is  centered  at  36.15MHz, so  the  IF  FREQ  should  be  set  within  ±0.2MHz  of 36.15MHz.
- 17)  Load  the  predefined  factory  settings  to  set  the MAX3543  registers  to  receive  the  desired  TV standard. For instance, to configure the device for reception  of  DVB-T  signals,  choose  the  Factory Settings → DVB-T  menu  item.  Note  that  Maxim provides predefined configurations for most of the existing  TV  standards.  If  custom  optimization  is desired, use these settings as a starting point.

## Gain Measurement to the IFOUT\_DTV Port in DVB-T Mode

- 1) Connect  the  dual-output  power-supply  outputs to  the  RFVGC  and  IFVGC  terminals  on  the  EV kit.  Adjust  voltages  at  RFVGC  and  IFVGC  to  be approximately +3V.
- 2) Load  the  predefined  factory  settings  for  DVB-T mode  by  selecting  the  Factory  Settings → DVB-T menu item.
- 3) Enter the desired RF frequency (e.g., 666MHz) into the RF FREQ text box in the RF Top tab.

Figure 1. USB Interface Board and MAX3543 EV Kit Connections

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 4) Verify that the device has locked to the correct frequency by checking the LOCK light in the bottomright corner of the window. A green light indicates a successful lock.
- 5) Set the RF signal generator to a 666MHz frequency and a  -90dBm power level. Enable the RF signal generator's output.
- 6) Set the center frequency of the spectrum analyzer to 36.15MHz and the span to 1MHz. Set the reference level to 0dBm. Increase the input power of the signal  generator  until  the  output  level  reaches -22dBm.  This  is  the  output  level  that  corresponds to  approximately  1VP-P  output  across  the  IC's DTVOUT+ and DTVOUT- pins. The voltage gain of the receiver can be calculated by taking the difference in dB between the input and output power and applying  correction  factors  to  compensate  for  the 50ω-to-75ω min loss pad at the input (R10 and R11), T1 balun (4:1 impedance ratio), and R7 442ω series resistor at the output.

Voltage gain can be calculated from:

<!-- formula-not-decoded -->

where:

3.96dB is the voltage loss due to the input min loss pad,

<!-- formula-not-decoded -->

is the input RMS voltage calculated from the input power PIN (i.e., power from the RF signal generator),

<!-- formula-not-decoded -->

is  the  output  RMS  voltage  calculated  from  the output power POUT (i.e., power at the spectrum analyzer input),

6dB is the output transformer voltage ratio,

19.86dB (i.e., 20 LOG(492/50)) is the voltage loss due to R7 series resistor.

The  calculated  voltage  gain  should  be  approximately 85dB.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3543 Evaluation Kit

## RF Gain-Control Range (RFVGC)

To measure the gain-control range in the RF stage, follow the steps below:

- 1) Set RFVGC to +3V.
- 2) Set IFVGC to +3V.
- 3) Adjust the RF input power to achieve -22dBm at the IFOUT\_DTV  output.  Record  this  as  the  reference output level.
- 4) Set RFVGC to +0.5V and record the change in the IFOUT\_DTV output level in dB relative to  -22dBm. This  change  in  output  power  is  the  gain-control range of the RF stage.
- 5) The RF gain-control range should be approximately 53dB.
- 6) Note that it might be necessary to increase the input power level with RFVGC = +0.5V in order to make an accurate level measurement. If this is necessary, calculate the RF gain-control range by first calculating the gain with RFVGC = +3V, then calculate the gain with RFVGC = +0.5V and take the difference between these two gain levels.

## IFVGA Gain-Control Range (IFVGC)

To measure the gain-control range in the IFVGA stage, follow the steps below:

- 1) Set RFVGC to +1V.
- 2) Set IFVGC to +3V.
- 3) Adjust the RF input power to achieve -40dBm at the IFOUT\_DTV  output.  Record  this  as  the  reference output level.
- 4) Set IFVGC to +0.5V and record the change in the IFOUT\_DTV output level  in  dB  relative  to  -40dBm. This  change  in  output  power  is  the  gain-control range of the IFVGA stage.
- 5) The  IFVGA  gain-control  range  should  be  approximately 42dB.
- 6) Note that it might be necessary to increase the input power level  with  IFVGC  =  +0.5V  in  order  to  make an accurate level measurement. If this is necessary, calculate the IFVGA gain control range by first calculating the gain with IFVGC = +3V, then calculate the gain with IFVGC = +0.5V and take the difference between these two gain levels.

## MAX3543 Evaluation Kit

## Gain Measurement to the IFOUT\_ATV Port in PAL-B/G Mode

- 1) Connect the IFOUT\_ATV output (J4) to a spectrum analyzer.
- 2) Adjust the RFVGC voltage to approximately +3V.
- 3) Load  the  predefined  factory  settings  for  PAL-B/G mode  by  selecting  the  Factory  Settings → PAL/ SECAM B/G/D/K/I (IFOUT2 output) menu item.
- 4) Enter the desired RF frequency (e.g., 506MHz) into the RF FREQ text box in the RF Top tab.
- 5) Set  the  RF  signal  generator  to  the  desired  RF  frequency and a  -60dBm power level. Enable the RF signal generator's output.
- 6) Set the center frequency of the spectrum analyzer to 36.15MHz and the span to 1MHz. Set the reference level to 0dBm. Increase the input power of the signal generator until the output level reaches -28dBm. This is the output level that corresponds to approximately 0.5VP-P output at the IC's IFOUT2 pin. The voltage  gain  of  the  receiver  can  be  calculated  by taking  the  difference  in  dB  between  the  input  and output  power  and  applying  correction  factors  to compensate for the 50ω-to-75ω min loss pad at the input (R10 and R11), and R13 500ω series resistor at the output.

Voltage gain can be calculated from:

<!-- formula-not-decoded -->

where:

3.96dB is the voltage loss due to the input min loss pad,

<!-- formula-not-decoded -->

is the input RMS voltage calculated from the input power PIN (i.e., power from the RF signal generator),

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- formula-not-decoded -->

is  the  output  RMS  voltage  calculated  from  the output power POUT (i.e., power at the spectrum analyzer input),

20.83dB (i.e., 20 LOG(550/50)) is the voltage loss due to R13 series resistor.

The  calculated  voltage  gain  should  be  approximately 44dB.

## Connecting the MAX3543 to Digital and Analog Demodulators

The EV kit includes additional input and output connectors to allow for quick and easy evaluation of the IC's performance with digital and analog demodulators. The differential  input  of  the  digital  (or  digital  +  analog) demodulator can be connected to the DTV 3-pin header on  the  EV  kit.  The  IFAGC  output  of  the  demodulator should be connected to the IFVGC terminal on the EV kit. The IC controls its RF gain autonomously, so the RFVGC terminal on the EV kit should be left unconnected.

Older analog demodulators with single-ended input and built-in IF gain-control stage can be connected using the ATV 2-pin header on the EV kit. The RFVGC terminal on the EV kit should be left unconnected.

The device also provides the buffered reference clock output  that  can  be  used  by  demodulators.  Use  the REFOUT 2-pin header to connect the clock output to the demodulator reference clock inputs.

## Layout Considerations

Contact  Maxim  to  obtain  the  MAX3543's  reference design layout to use as a starting point for PCB designs. Refer  to  the Layout  Recommendations section  in  the MAX3543 IC data sheet for more information.

<!-- image -->

## MAX3543 Evaluation Kit

<!-- image -->

Figure 2. MAX3543 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3543 Evaluation Kit

Figure 3. MAX3543 EV Kit PCB Component Placement Guide-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3543 Evaluation Kit

<!-- image -->

Figure 4. MAX3543 EV Kit PCB Layout-Primary Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3543 Evaluation Kit

Figure 5. MAX3543 EV Kit PCB Layout-Secondary Component Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3543 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.