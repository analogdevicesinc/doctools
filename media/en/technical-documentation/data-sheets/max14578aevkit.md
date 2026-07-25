<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX14578A Evaluation Kit

## Evaluates: MAX14578AE

## General Description

The  MAX14578A  evaluation  kit  (EV  kit)  provides  a proven  design  to  evaluate  the  MAX14578AE  USB battery charger detector in a 12-bump wafer-level package (WLP). The IC features charger detection compliant to  USBIF  battery  charging  spec,  dedicated  charger detection,  Apple/Sony  charger  detection,  China  YD/ T1591-compliant  charger  detection,  and  USB  passthrough  communication.  The  EV  kit  has  various  power options to separate the charging current from the system current. The EV kit features the MAX8903A 1-cell lithiumion  (Li+)  DC-DC  USB  charger  for  interfacing  with  the MAX14578AE in an application setting.

The  EV  kit  PCB  comes  with  a  MAX14578AEEWC+ installed.

| DESIGNATION                               |   QTY | DESCRIPTION                                                            |
|-------------------------------------------|-------|------------------------------------------------------------------------|
| C1-C7                                     |     7 | 0.1 F F Q 10%, 25V X5R ceramic capacitors (0603) Murata GRM188R61E104K |
| C8, C9                                    |     2 | 10 F F Q 10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A106K  |
| C10                                       |     1 | 4.7 F F Q 10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E475K  |
| C11                                       |     1 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM185R60J225K |
| CE0, CE1, CE2, DM, DP                     |     5 | White multipurpose test points                                         |
| D1-D4                                     |     4 | Hyper-bright, low-current red LEDs (0603)                              |
| EXTDC, LOUT, U1_BAT, U2_BAT, VB, VL, VSYS |     7 | Red multipurpose test points                                           |
| GND                                       |     4 | Black multipurpose test points                                         |
| JU1, JU4, JU9, JU10                       |     4 | 3-pin headers                                                          |
| JU2, JU7                                  |     2 | 4-pin headers                                                          |
| JU3, JU5, JU6, JU8                        |     4 | 2-pin headers                                                          |
| L1                                        |     1 | 1 F H, 2.2A inductor TOKO FDSD0415-1R0M                                |

<!-- image -->

## Features

- S Includes MAX8903A USB Charger for Application Testing
- S Can be USB Powered or Externally Powered for Greater Charging Current
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| NTC           |     1 | 100k I NTC thermistor (0402) Murata NCP15WF104J03RC                           |
| P1            |     1 | USB micro-B, right-angle PC-mount receptacle                                  |
| P2            |     1 | USB type-A, right-angle receptacle                                            |
| R1, R2, R7    |     3 | 10k I Q 5% resistors (0603)                                                   |
| R3-R6         |     4 | 2k I Q 5% resistors (0603)                                                    |
| R8            |     1 | 0 I Q 5% resistor (0603)                                                      |
| R9, R10       |     0 | Not installed, potentiometers                                                 |
| R11, R12      |     0 | Not installed, resistors (0603)                                               |
| R13           |     1 | 4.53k I Q 1% resistor (0603)                                                  |
| R14           |     1 | 1.2k I Q 1% resistor (0603)                                                   |
| R15           |     1 | 100k I Q 1% resistor (0603)                                                   |
| U1            |     1 | USB charger detector (12 WLP) Maxim MAX14578AEEWC+                            |
| U2            |     1 | 1-cell Li+ charger for USB and adapter power (28 TQFN-EP*) Maxim MAX8903AETI+ |
| -             |     1 | USB high-speed A-to-B cable (6ft)                                             |
| -             |     1 | USB high-speed A-to-micro-B cable (1m)                                        |
| -             |    10 | Shunts                                                                        |
| -             |     1 | PCB: MAX14578A EVALUATION KIT                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

- MAX14578A EV kit
- Windows  XP M ,  Windows  Vista M or  Windows  7  PC with a spare USB port
- USB flash memory stick
- Resistor  networks,  as  shown  in  the  MAX14578E/ MAX14578AE IC data sheet
- Multimeter
- Wire with clips

## MAX14578A Evaluation Kit

## Evaluates: MAX14578AE

## Component Suppliers

| SUPPLIER                              | PHONE        | WEBSITE                     |
|---------------------------------------|--------------|-----------------------------|
| Murata Electronics North America Inc. | 770-436-1300 | www.murata-northamerica.com |
| TOKO America, Inc.                    | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX14578AE when contacting these component suppliers.

## Quick Start

## Required Equipment

- 11)  Plug the USB cable to the PC again. Verify that the flash memory is not accessible.
- 12)  Using the multimeter, verify that the voltages on the CE2, CE1, and CE0 test points on the EV kit board are  0V,  5V,  and  0V,  respectively.  This  is  the  dedicated charger application test.
- 13)  Unplug the USB cable from the PC.
- 14)  Connect  a  1A  Apple  charger  resistor  network,  as shown  in  the  MAX14578E/MAX14578AE  IC  data sheet.
- 15)  Plug the USB cable to the PC again. Verify that the flash memory is accessible.
- 16)  Using the multimeter, verify that the voltages on the CE2, CE1, and CE0 test points on the EV kit board are  0V,  5V,  and  0V,  respectively.  This  is  the  1A Apple charger application test.
- 17)  Unplug the USB cable from the PC.
- 18)  Connect a 0.5A Apple charger resistor network, as shown  in  the  MAX14578E/MAX14578AE  IC  data sheet.
- 19)  Plug the USB cable to the PC again. Verify that the flash memory is accessible.
- 20)  Using the multimeter, verify that the voltages on the CE2, CE1, and CE0 test points on the EV kit board are  5V,  0V,  and  0V,  respectively.  This  is  the  0.5A Apple charger application test.

## Detailed Description of Hardware

The MAX14578A EV kit evaluates the MAX14578AE USB charger  detector.  The  EV  kit  demonstrates  USB  signal pass-through, charger detection and on-board charging using  the  MAX8903A. The EV kit has various on-board test points to monitor various signals.

The  EV  kit  uses  the  MAX14578AEEWC+  in  a  12-bump (1.3mm  x  1.68mm)  WLP  on  a  proven  four-layer  PCB design. The EV kit operates off the USB supply. To test charging applications, an external power supply may be needed for high current charging.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  the  jumpers  on  the  EV  kit  board  are  in their default positions, as shown in Table 1.
- 2) Connect the A-to-B USB cable from the PC to the P1 USB connector on the EV kit board.
- 3) Measure the voltage on the LOUT test point on the EV kit. Verify that the voltage is approximately 5V.
- 4) Measure the voltage on the VL test point on the EV kit board. Verify that the voltage is around 5V.
- 5) The  EV  kit  can  detect  different  chargers,  but many times the chargers have custom cables and connectors.  The  user  can  use  wires  with  clips and different resistor networks to simulate different charger detection.
- 6) The following are three application tests. The first is for dedicated charger detection. The second is for 1A  Apple  charger  detection.  The  third  is  for  0.5A Apple charger detection.
- 7) Plug a USB flash memory stick into the P2 connector.
- 8) Wait a few seconds and verify on your PC that the USB flash memory is visible and the content in the memory can be accessed.  This  is  the  USB  transceiver pass-through communication.
- 9) Unplug the USB cable from the PC.
- 10)  Using a wire with clips, electrically connect the DP and DM test points on the EV kit board.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14578A Evaluation Kit

## Evaluates: MAX14578AE

## Pass-Through Communication

The  EV  kit  USB  signal  traces  are  designed  with  90 I differential  impedances.  The  controlled  impedances allow  the  EV  kit  to  pass  USB-compliance  testing  using eye diagrams.

## Charger Detection

The  EV  kit  detects  the  charger  plugged  into  the  P1 connector. The charger detection can occur without any interface to the MAX8903A charger (U2). Test points are located on the D+/D- lines (DP/DM) that connect to P1 to simulate different types of chargers.

One  common  charger  detection  method  is  the  China YD/T1591-compliant  charger,  which  looks  for  a  short between D+ and D-. If that charger is not available, short the DP and DM test points with a wire and read the voltages  on  the  charger-enable  control  outputs  (i.e.,  CE2, CE1, and CE0).

Another  common  charger  is  the  Apple  charger.  The detection involves looking for a specific voltage on the D+  and  D-  lines.  The  1A  Apple  charger  has  approximately 2V on D+ and 2.68V on D-. Use a resistor network or directly apply the correct voltages on the DP and DM test points to simulate the charger, and measure the voltages on the charger-enable control outputs.

Table 1. Jumper Descriptions (JU1-JU10)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                          |
|----------|------------------|------------------------------------------------------|
| JU1      | 1-2              | EN pin of U1 connected to VB (disabled).             |
| JU1      | 2-3*             | EN pin of U1 connected to GND (enabled).             |
| JU2      | 1-2*             | DC pin of U2 connected to GND.                       |
| JU2      | 1-3              | DC pin of U2 connected to a user- supplied DC power. |
| JU2      | 1-4              | DC pin of U2 connected to the VB pin of U1.          |
| JU3      | 1-2              | CE2 pin of U1 connected to the IUSB pin of U2.       |
| JU3      | Pin 1*           | CE2 pin of U1 disconnected from the IUSB pin of U2.  |
| JU4      | 1-2              | CEN pin of U2 connected to VL (disabled).            |
| JU4      | 2-3*             | CEN pin of U2 connected to GND (enabled).            |
| JU5      | 1-2              | CE1 pin of U1 connected to the DCM pin of U2.        |
| JU5      | Pin 1*           | CE1 pin of U1 disconnected from the DCM pin of U2.   |

<!-- image -->

## On-Board Charging

The U2 charger circuitry is placed on the EV kit for charging application tests. The maximum input voltage to the U2 device is 16V. For low-current charging tests, connect the USB power from the P1 USB connector (VB) to the U2 USB power input pin. For higher current charging, connect the U2 DC power input pin to the EXTDC test point, and apply a user-supplied DC power supply up to 16V.

The  U2  device  is  set  for  a  maximum  1.5A  charging current. The current limit is set by the U1 device depending on the states of the CE2, CE1, and CE0 pins. The EV kit has a fixed current limit of 1.5A, but the EV kit layout is designed to install Vishay TSM4-series potentiometers on R9 and R10 for custom current limits.

## Power Supply

The EV kit has various power options and jumpers to separate the supply current from the charging current. The EV kit is USB powered by default. The 5V comes from the P1 VBUS line and powers the inputs to both the U1 and U2 devices. U1 has an LDO with output at 5V and 100mA (LOUT test point). The total USB current is approximately 500mA, so to  test  more  than  500mA  charging  current, use an external supply.

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| JU6      | 1-2              | CE0 pin of U1 connected to the USUS pin of U2.                  |
| JU6      | Pin 1*           | CE0 pin of U1 disconnected from the USUS pin of U2.             |
| JU7      | 1-2*             | USB pin of U2 connected to the VB pin of U1.                    |
| JU7      | 1-3              | USB pin of U2 connected to a user-supplied DC power.            |
| JU7      | 1-4              | USB pin of U2 connected to GND.                                 |
| JU8      | 1-2*             | BAT pin of U1 connected to the BAT pin of U2.                   |
| JU8      | Pin 1            | BAT pin of U1 disconnected from the BAT pin of U2.              |
| JU9      | 1-2*             | USB connector P2 VBUS connected to the VB pin of U1.            |
| JU9      | 1-3              | USB connector P2 VBUS connected to the LOUT pin of U1.          |
| JU10     | 1-2              | Charger-enable control outputs pulled up to the VL pin of U2.   |
| JU10     | 2-3*             | Charger-enable control outputs pulled up to the LOUT pin of U1. |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14578A Evaluation Kit Evaluates: MAX14578AE

<!-- image -->

Figure 1a. MAX14578A EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14578A Evaluation Kit

## Evaluates: MAX14578AE

<!-- image -->

Figure 1b. MAX14578A EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14578A Evalution Kit

## Evalutes: MAX14578AE

<!-- image -->

Figure 3. MAX14578A EV Kit PCB Layout-Component Side

Figure 2. MAX14578A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX14578A EV Kit PCB Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14578A Evalution Kit

## Evalutes: MAX14578AE

<!-- image -->

Figure 6. MAX14578A EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX14578A EV Kit PCB Layout-Power Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14578AEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14578A Evaluation Kit

## Evaluates: MAX14578AE

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9