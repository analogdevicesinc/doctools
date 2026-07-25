<!-- lastmod 2022-08-02 -->
## MAX20038 Evaluation Kit

## General Description

The MAX20038 evaluation kit (EV kit) demonstrates the MAX20038 automotive high-current, high-efficiency stepdown  DC-DC  converter  with  integrated  USB  protection and host charger adapter emulation.

The  IC  features  integrated  host-charger  port-detec -tion  circuitry  adhering  to  the  USB-IF  BC1.2  battery charging specification,  Apple ® iPod ® /iPhone ® /iPad ® and  Samsung ®   charge-detection  termination  resistors, and Chinese Telecommunication Industry Standard YD/T 1591-2009.

The IC integrates high side current-sensing and voltageadjustment circuitry that provides automatic USB voltage adjustment  to  compensate  for  voltage  drops  in  captive cables associated with automotive applications.

The  high-efficiency,  step-down,  synchronous,  DC-DC converter  operates  from  a  voltage  up  to  28V  and  is protected  from  load  dump  transients  up  to  40V. The converter is programmable for frequencies from 275kHz to 2.2MHz and can deliver 3A of continuous current at 105°C.

The EV kit is populated with an I 2 C-enabled MAX20038. The I 2 C interface allows for flexible configuration, detailed fault  diagnostics,  and  access  to  the  on-chip  ADC  that reports output voltage and current. The I 2 C features are easily  accessed  by  using  the  Maxim  command  module (MINIQUSB) along with the provided example GUI.

The  EV  kit  is  configured  for  2.2MHz  operation,  and  the included  3m  USB  cable  allows  for  demonstration  of  the cable compensation capability of the IC. The high-voltage data switches of the MAX20038 require data line tuning to achieve an optimal eye diagram. The EV kit comes populat -ed with tuning components optimized for use with the sup -plied cable. Refer to Figure 19 in the MAX20037/MAX20038 IC data sheet for the MAX20038 tuned near-eye diagram.

Apple, iPod, iPhone, and iPad are registered trademarks of Apple Inc.

Samsung is a registered trademark of Samsung Electronics Co., Ltd..

Evaluates: MAX20038

## Benefits and Features

- Configurable Charge-Detection Modes
- USB-IF BC1.2 CDP, DCP
- Apple 2.4A, 1.0A
- China YD/T1591-2009 Charging Specification
- Automatic USB Voltage Adjustment by Integrated DC-DC Converter (275kHz to 2.2MHz)
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

The following  procedure  demonstrates  the  MAX20038's voltage-adjustment capability and I 2 C interface.

## Required Equipment

- MAX20038 EV kit
- MINIQUSB EV kit and MAX20038 example GUI
- Included 3m USB captive cable
- 2Ω, 20W resistor or electronic load connected to a Type-A USB 2.0 connector (plug)
- 12V, 2A DC power supply or car battery (Supply A)
- 3.3V, 1A DC power supply (Supply B)
- Two digital voltmeters (DVM1, DVM2) or one oscilloscope

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX20038 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect  Supply A  (turned  off)  between  the  VBAT and GND test points.
- 2) Connect  Supply  B  (turned  off)  between  the  3V3 header and GND test point.
- 3) Connect USB cable, but leave the load disconnected.
- 4) Connect DVM1 (or oscilloscope channel 1) between the USB\_5V and GND test points on the EV kit (this is the output of the buck).
- 5) Connect DVM2 (or oscilloscope channel 2) to VBUS and GND at the far-end of the USB cable (this is the voltage a portable device sees).
- 6) Power on Supply A at 12V with a 2A current limit and Supply B at 3.3V with a 0.2A current limit.
- 7) Both  DVM1  and  DVM2  should  measure  approxi -mately 5V.
- 8) Establish I 2 C communication with the GUI:
- a) [ Visit https://www.maximintegrated.com/en/ design/tools/applications/evkit-software/ index.mvp?id=1330 to  download  and  install  the MAX20038 example GUI and MINIQUSB drivers.](https://www.maximintegrated.com/en/design/tools/applications/evkit-software/index.mvp?id=1330)
10. b ) Using the supplied jumper wires, connect the MINIQ  pins  labeled  SDA,  SCL,  and  GND  to the appropriate EV kit headers.
- c)  Connect the MINIQUSB module to a PC through a USB cable.
- d)  Open the MAX20038 example GUI and look at the  message  bar  at  the  bottom  of  the  GUI  to verify that both the MINIQUSB and the EV kit are detected.
- 9) Connect the load to the end of the USB cable.
- 10) With the voltage adjustment disabled (GAIN = 0x0; default setting), measure the voltage:
- a.  The voltage at the buck output (USB\_5V) should still be approximately 5V.  There is a slight drop due to load regulation and the current through the SENSE resistor, output filter, and PCB trace.
- b.  The  voltage  at  the  far  end  of  the  USB  cable  will  be noticeably below 5V. The voltage drop is caused by the load current flowing through the cable resistance.
- 11)  Using the GAIN drop-down list in the GUI, set the gain to 661mΩ, which is the maximum setting.

## Evaluates: MAX20038

- 12)  The  voltage  at  the  buck  output  should  increase  to 6.8V,  and  the  voltage  at  the  end  of  the  USB  cable should now be approximately 5V.
- 13)  The far-end voltage can be fine-tuned by adjusting the GAIN register to match the specific cable. Once the GAIN register is adjusted correctly, the far-end volt -age should maintain 5V regardless of load current.

## Optional: Using the On-Chip ADC

- 14) Ensure  that  the Read  V/I  ADC and Auto  Read checkboxes are checked.
- 15) Click on the Int ADC V/I Done checkbox. USB\_V and USB\_I will update with the voltage on SENSP and the voltage across R SENSE respectively.
- a.  The ADC values updates once for every write of Int ADC V/I Done .

## Detailed Description

The  MAX20038  EV  kit  comes  fully  assembled,  tested, and installed with a MAX20038ATIA/V+ IC. Stand-alone variants can be used on this EV kit by changing the IC and configuration resistors.

## EV Kit Interface

Header J1 includes input and output test points for con -trolling the IC and evaluating its functionality. Table 1 lists the individual pins and their functions.

## Table 1. External Header (J1)

|   PIN | NAME         | DESCRIPTION                                |
|-------|--------------|--------------------------------------------|
|     1 | 3V3          | EV kit 3.30V (input)                       |
|     2 | SYNC         | Buck regulator SYNC (input/output)         |
|     3 | CDP/DCP      | Charge-detection configuration pin (input) |
|     4 | HVEN         | Active-high IC enable (input)              |
|     5 | ENBUCK       | Active-high DC-DC enable (input)           |
|     6 | FAULT        | Active-low fault indicator (output)        |
|     7 | INT (ATTACH) | I 2 C interrupt (output)                   |
|     8 | SCL          | I 2 C clock                                |
|     9 | SDA          | I 2 C data                                 |
|    10 | GND          | EV kit ground                              |

## MAX20038 Evaluation Kit

## Table 2. External Switch (SW1)

| PIN     |   POSITION | DESCRIPTION                                |
|---------|------------|--------------------------------------------|
| HVEN    |          0 | Device disabled                            |
| HVEN    |          1 | Device enabled                             |
| ENBUCK  |          0 | Buck output disabled                       |
| ENBUCK  |          1 | Buck output enabled                        |
| SYNC    |          0 | Skip mode (only if configured as an input) |
| SYNC    |          1 | Forced-PWM mode                            |
| CDP_DCP |          0 | Default to Auto CDP mode                   |
| CDP_DCP |          1 | Keep pin low on I 2 C variant              |

Switch SW1 allows the user to switch the value on the HVEN,  ENBUCK,  SYNC,  and  CDP/DCP  pins.  Setting the  switch  to  the  ON/1  position  ties  the  connected  pin to  the  3.3V  supply  and  setting  the  switch  to  the  OFF/0 position ties the pin to ground. To externally control these pins through the J1 header, set the switch to the OFF/0 position. This leaves the pin connected to the header with a pulldown resistor. Table 2 describes the switch and its functionality.

Connect  battery-voltage  input  between  the  VBAT  and GND  test  loops  and  3.3V  to  the  3V3  pin  on  J1.  The IC's  DC-DC  converter  output  voltage  can  be  measured between the USB\_5V and GND test points, or between the ground and VBUS pins of the USB connector. To dis -able the voltage-adjustment feature, set the GAIN register to zero (default). Setting the HVEN switch to one pulls the HVEN pin to 3V3 and enables the device. SYNC can be pulled to the 3V3 node for forced-PWM operation (when configured as an input), or configured to output the inter -nal oscillator. Pull the ENBUCK pin low to disable DC-DC converter  operation.  The FAULT output  is  active  low. The  charge  mode  can  be  configured  through  I 2 C,  by starting the part with the CDP\_DCP pin low. Refer to the MAX20037/MAX20038 IC data sheet for details

Evaluates: MAX20038

## PCB Layout Guidelines

A good PCB  layout is critical to proper system performance.  The  loop  area  of  the  DC-DC  conversion circuitry  must  be  minimized.  Place  the  input  capacitor, power inductor, and output capacitor as close to the IC  as possible. Shorter traces should be prioritized over wider traces.

A  low-impedance  ground  connection  between  the  input and  output  capacitors  is  necessary  (route  through  the ground pour on the exposed pad). Connect the exposed pad to ground. Place multiple vias in the pad to connect to all other ground layers for proper heat dissipation (failure to do this may result in the IC repeatedly reaching ther -mal shutdown). Do not use separate power and analog grounds; use a single common ground, as high-frequency return  currents  flow  directly  under  the  corresponding traces.

USB traces must be routed as a 90Ω differential pair with an appropriate keep-out area. Avoid routing USB traces near  high-frequency  switching  nodes,  or  other  sources of noise such as clocks. The length of the routing should be  minimized  and  avoid  90°  turns,  excessive  vias,  and RF  stubs.  LC  tuning  components  are  required  for  the MAX20038. Place components close to the IC, use highQ wire-wound inductors, and contact the Maxim applica -tions team for support.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20038EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20038 EV Kit Bill of Materials

| REFERENCE               |   QTY | DESCRIPTION                                      | MANUFACTURER NUMBER   | MANUFACTURER                    |
|-------------------------|-------|--------------------------------------------------|-----------------------|---------------------------------|
| C1                      |     1 | Ceramic Capacitor (0805) 2.2nF 100V 10% X6S      | GCM216R72A222KA37D    | Murata                          |
| C2                      |     1 | Electrolytic Capacitor (SMD) 47uF 25V 20%        | EEE-HC1E470XP         | Panasonic                       |
| C3                      |     2 | Ceramic Capacitor (0402) 0.22uF 35V 10% X7R      | CGA2B1X7R1V224KC      | TDK                             |
| C4                      |     1 | Open                                             | -                     | Open                            |
| C5                      |     1 | Ceramic Capacitor (1206)10uF 35V 10% X7R         | CGA5L1X7R1V106KC      | TDK                             |
| C6                      |     1 | Open                                             | -                     | Open                            |
| C7                      |     1 | Ceramic Capacitor (1210) 22uF 25V 10% X7R        | GRM32ER71E226KE5L     | Murata                          |
| C8                      |     1 | Ceramic Capacitor (0603) 1uF 16V 10% X7R         | CGA3E1X7R1C105K080AC  | TDK                             |
| C9                      |     1 | Ceramic Capacitor (0402) 1uF 10V 10% X7S         | GCM155C71A105KE38D    | Murata                          |
| C10-11                  |     2 | Ceramic Capacitor (0402) 6pF 50V C0G             | GCM1555C1H6R0CA16D    | Murata                          |
| C12, C20                |     2 | Ceramic Capacitor (0402) 0.1uF 50V 10% X7R       | CGA2B3X7R1H104K050BB  | TDK                             |
| C13-14                  |     2 | Ceramic Capacitor (0402) 2pF 50V C0G             | GCM1555C1H2R0CA16D    | Murata                          |
| C15                     |     1 | Ceramic Capacitor (0603) 2.2uF 16V 10% X7S       | CGA3E1X7S1C225KC      | TDK                             |
| C16                     |     1 | Ceramic Capacitor (0402) 100pF 50V 5% C0G        | CGA2B2C0G1H101J050BA  | TDK                             |
| C17, C21-C23            |     4 | Open                                             | -                     | Open                            |
| C18                     |     1 | Open                                             | -                     | Open                            |
| D1                      |     1 | Open                                             | -                     | Open                            |
| D2                      |     1 | Schottky Diode (SMB) 3A 60V                      | B360B-13-F            | Diodes Inc                      |
| GND, GND1, USB_5V, VBAT |     4 | Test Point                                       | 5024                  | Keystone                        |
| J1                      |     1 | 1x10 .100" Gold Header                           | 5-146858-1            | TE Connectivity                 |
| J2                      |     1 | USB A Receptacle                                 | KUSBX-SMT-AS1N-B30    | Kycon                           |
| J3                      |     1 | USB A Plug                                       | KUSBX-SMT2AP5S-B      | Kycon                           |
| L1                      |     1 | Ferrite Bead (1206)                              | 74279221601           | Wurth                           |
| L2                      |     1 | Ferrite Bead (1806)                              | BLM41P600S            | Murata                          |
| L3, L4                  |     2 | Inductor, 15nH, 0402                             | LQW15AN15NJ8ZD        | Murata                          |
| L6, L7                  |     2 | Inductor, 4.7nH, 0402                            | LQW15AN4N7B8ZD        | Murata                          |
| L5                      |     1 | Inductor, 1.5uH, 8.5A Isat                       | XEL4030-152MEB        | Coilcraft                       |
| R1                      |     1 | Resistor (1206) .033Ω 1%, 1W, 75ppm              | ERJ-MP2MF33MU         | Panasonic                       |
| R2, R8-14               |     8 | Resistor (0402) 100k Ohm 1%                      | CRCW0402100KFKED      | Vishay Dale                     |
| R3-4, R7, R15-16        |     5 | Open                                             | -                     | Open                            |
| R17                     |     1 | Resistor (0402) 0 Ohm                            | RK73Z1ETTP            | KOA Speer                       |
| SW1                     |     1 | 1.27mm Pitch DIP Switch                          | TDA04H0SB1R           | C&K Components                  |
| U1                      |     1 | 5mm x 5mm 28 pin QFN                             | MAX20038ATIA/V+       | Maxim Integrated Products, Inc. |
| -                       |     1 | PCB: MAX20038 EVALUATION KIT                     | MAX20038EVKIT#        | Maxim Integrated Products, Inc. |
| -                       |     3 | Jumper Wire (pack contains 100 total)            | 920-0140-01           | SchmartBoard                    |
| -                       |     1 | 3m USB Type A plug to recepticle extension cable | 52108                 | C2G (Cables to Go)              |

Evaluates: MAX20038

## MAX20038 EV Kit Schematic

<!-- image -->

## MAX20038 EV Kit PCB Layouts

<!-- image -->

MAX20038 EV Kit PCB Layout-Top Layer

## MAX20038 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20038 EV Kit PCB Layout-Layer 2

## MAX20038 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20038 EV Kit PCB Layout-Layer 3

## MAX20038 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20038 EV Kit PCB Layout-Bottom Layer

## MAX20038 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20038 EV Kit PCB Layout-Top Silkscreen

## MAX20038 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20038 EV Kit PCB Layout-Bottom Silkscreen

## MAX20038 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

©

Evaluates: MAX20038