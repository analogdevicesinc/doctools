<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX14579E Evaluation Kit

## Evaluates: MAX14579E/MAX14579AE

## General Description

The MAX14579E evaluation kit (EV kit) provides a proven design to evaluate the MAX14579E headset detection IC. The EV kit is designed to demonstrate the IC's headset insertion  detection,  SEND/END  detection,  and  microphone low-power features. The EV kit requires a single power source using an active USB port.

The EV kit PCB comes with a MAX14579EETA in an 8-pin TDFN package with an exposed pad installed and can also be used to evaluate the MAX14579AE.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C105k    |
| C2            |     0 | Not installed, ceramic capacitor (0603)                                |
| C3            |     1 | 0.22 F F Q 10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E224K    |
| C4, C5        |     2 | 0.1 F F Q 10%, 50V X5R ceramic capacitors (0603) Murata GRM188R61H104K |
| GND           |     2 | Black test points                                                      |
| J1            |     1 | 3.5mm audio jack                                                       |
| J2            |     1 | 3.5mm, 4-pole jack KSD Co. KJA-PH-00176                                |
| J3            |     1 | 3.5mm, 4-pole jack INCHANG Electronics IJAN-97                         |

## Features

- S USB Powered or External Power Supplies
- S Low-Power Microphone Mode
- S Low-Noise Microphone Bias Generator
- S Configurable for Headsets with Normally Open Detection Switches
- S Headset SEND/END Detection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| J4            |     0 | Not installed, jack                                       |
| JU1, JU2      |     2 | 3-pin headers                                             |
| JU3           |     1 | 2-pin header                                              |
| L1            |     1 | Ferrite bead (0603) Murata BLM18SG700TN1                  |
| MIC           |     1 | Red test point                                            |
| P1            |     1 | USB type-B right-angle PC-mount receptacle                |
| R1, R2        |     2 | 1M I Q 5% resistors (0603)                                |
| R3            |     1 | 2.2k I Q 5% resistor (0603)                               |
| R4            |     1 | 10k I Q 5% resistor (0603)                                |
| U1            |     1 | Headset jack detection IC (8 TDFN-EP) Maxim MAX14579EETA+ |
| -             |     3 | Shunts                                                    |
| -             |     1 | PCB: MAX14579E EVALUATION KIT                             |

## Component Suppliers

| SUPPLIER                               | PHONE         | WEBSITE                     |
|----------------------------------------|---------------|-----------------------------|
| INCHANG Electronics                    | 82-31-4688181 | www.inchange.en.ec21.com    |
| KSD Co.                                | 82-31-3719955 | www.ksdigital.en.ec21.com   |
| Murata Electronics North America, Inc. | 770-436-1300  | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100  | www.component.tdk.com       |

Note:

Indicate that you are using the MAX14579E when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

- MAX14579E EV kit
- User-supplied PC with a spare USB port
- 3-channel oscilloscope
- Audio input source (optional)
- USB cable
- 3.5mm headset or microphone input source

## Procedure

The EV kit if fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  shunts  are  installed  on  pins  1-2  on jumpers JU1 and JU2.
- 2) Verify that a shunt is installed on jumper JU3.
- 3) Connect the USB cable to the USB connector (P1) on the EV kit.
- 4) Connect the other end of the USB cable to an active USB port.
- 5) Connect  the  oscilloscope  to  the  DETIN,  DET,  and SWD PCB pads.
- 6) Verify  that  DETIN,  DET,  and  SWD  amplitudes  are approximately 5V.
- 7) Insert  a  headset  with  a  normally  open  detection switch to the audio line at J2.
- 8) Verify that DETIN and DET are low.
- 9) Press and hold the headset microphone pushbutton. Verify that SWD is low.
- 10)  Release  the  headset  microphone  pushbutton  and verify that SWD goes high.

## Detailed Description of Hardware

The  MAX14579E  EV  kit  provides  a  proven  design to evaluate the MAX14579E insertion jack detection,  microphone  bias  generator,  and  SEND/END button-press detection IC. The EV kit requires an active USB port or an external 2.5V to 5.5V supply for operation

The MAX14579E/MAX14579AE devices manage headsets by  integrating  a  jack  insertion  detection  circuit,  microphone  bias  generation,  and  SEND/END  button-press detection.  The  devices  feature  a  low-power  microphone mode to reduce the high bias current required for microphone operation when the microphone is not in use.

<!-- image -->

## MAX14579E Evaluation Kit

## Evaluates: MAX14579E/MAX14579AE

## Quick Start

## Required Equipment

The  EV  kit  circuit  provides  two  3.5mm  headset  jacks (J2 and J3) for quick evaluation of the devices. The EV kit  also  provides  a  3.5mm  audio  jack  (J1)  for  routing audio signals to J2 and J3. The audio signals can also be applied at the AUDIO\_L and AUDIO\_R PCB pads.

The MAX14579E and MAX14579AE have 350ms (typ)  and  1s  (typ)  DETIN  to  DET  debounce  delays, respectively. The EV kit provides PCB  pads for monitoring the SWD, DET, DETIN, and MIC\_OUT signals in addition to a test point for monitoring the MIC voltage.

The EV kit can also be used to evaluate the MAX14579AE with IC replacement of U1.

## External Power Supply

The EV kit derives it power from the USB port (P1) or an external voltage applied at the VCC and GND PCB pads. A 2.5V to 5.5V external supply can be applied at the VCC and GND PCB pads. When operating the EV kit using an external supply, verify that P1 is not connected to an active USB port.

## Power-Mode Selection (JU1)

Jumper  JU1  configures  the  IC  power  mode.  Install  a shunt  on  pins  1-2  to  enter  call  mode.  In  call  mode, the  internal  2.2V  (typ)  LDO  turns  on  immediately  and generates the microphone bias voltage (VBIAS) when a plug is inserted at J2 or J3. The LDO is connected to the MIC through bias resistor R3. The bias voltage can be monitored at the MIC test point.

Install  a  shunt  on  pins  2-3  on  JU1  to  place  the  IC  in standby mode. The microphone bias connection either turns off permanently if a headset is inserted at J2, or J3 enters  microphone  low-power  mode  (MPLP).  In  MPLP mode, the MIC output is pulsed high every 8ms (typ) with a  peak  amplitude  equivalent  to  VBIAS.  See  Table  1  for JU1 configuration.

The MODE input is compatible with 1.8V logic and can be set using VCC or a 1.8V to 5.5V external supply at the VLOGIC and GND PCB pads

Refer to the MODE  Control  Input section in the MAX14579E/MAX14579AE IC data sheet for a detailed description of the IC power-mode states.

## Table 1. Power-Mode Selection (JU1)

| SHUNT POSITION   | MODE PIN            | POWER MODE   |
|------------------|---------------------|--------------|
| 1-2              | Connected to VLOGIC | Call         |
| 2-3              | Connected to ground | Standby      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14579E Evaluation Kit

## Evaluates: MAX14579E/MAX14579AE

## Headset Detection/Insertion

The  EV  kit  circuit  detects  a  headset  insertion/removal event by monitoring the DETIN input on the IC.

Jumper  JU2  configures  the  EV  kit  for  headsets  with normally open insertion detection switches. Insert a shunt on  pins  1-2  for  evaluating  a  headset  with  a  normally open detection switch to the audio line connected at J2. Install a shunt on pins 2-3 to evaluate a headset with a normally  open  detection  switch  to  ground  at  J3.  When a valid headset is inserted at the connectors, DETIN is pulled  low  and  DET  is  low  after  the  IC  DETIN-to-DET debounce period.

The  EV  kit  provides  DETIN  and  DET  PCB  pads  for monitoring  the  input  and  output  signals,  respectively. See Table 2 for proper JU2 configuration when operating the EV kit using a headset at J2 or J3.

Table 2. Headset Configuration (JU2)

| SHUNT POSITION   | HEADSET CONNECTED AT   | HEADSET SWITCH CONFIGURATION   |
|------------------|------------------------|--------------------------------|
| 1-2              | J2                     | Normally open to audio line    |
| 2-3              | J3                     | Normally open to GND           |

<!-- image -->

## Headset SEND/END Detection

The  IC  SEND/END  detection  circuitry  is  active  when DETIN  is  low.  The  EV  kit  circuit  detects  a  SEND/END button-press  event  by  monitoring  the  MIC  input.  When pressing  the  headset  MIC  pushbutton,  the  SEND/END open-drain  logic  output  (SWD)  goes  low  after  the  30ms (typ) debounce period. The SWD output can be monitored using the SWD PCB pad.

## Digital Supply Selection (JU3)

Jumper  JU3  selects  the  EV  kit  digital  supply  voltage. Install  a  shunt  on  jumper  JU3  to  select  VCC  as  the digital  supply  voltage.  Remove  the  shunt  on  JU3  and apply  a  user-supplied  1.8V  to  5.5V  DC  power  supply at  the  VLOGIC  and  GND  PCB  pads.  See  Table  3  for proper jumper configuration for setting the EV kit digital supply voltage.

## Table 3. Digital Voltage Configuration (JU3)

| SHUNT POSITION   | DIGITAL VOLTAGE SUPPLY                                                     |
|------------------|----------------------------------------------------------------------------|
| Installed        | VCC                                                                        |
| Not installed    | User-supplied 1.8V to 5.5V power source applied at VLOGIC and GND PCB pads |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14579E Evaluation Kit

## Evaluates: MAX14579E/MAX14579AE

<!-- image -->

Figure 1. MAX14579E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14579E Evaluation Kit

## Evaluates: MAX14579E/MAX14579AE

<!-- image -->

Figure 2. MAX14579E EV Kit Component Placement GuideComponent Side

Figure 3. MAX14579E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14579E EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX14579E/MAX14579AE

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14579EEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14579E Evaluation Kit

## Evaluates: MAX14579E/MAX14579AE

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.