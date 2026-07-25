<!-- lastmod 2022-08-02 -->
## MAX19794 Evaluation Kit

## General Description

The  MAX19794  evaluation  kit  (EV  kit)  simplifies  the evaluation of the MAX19794. The MAX19794 dual general-purpose analog voltage variable attenuator (VVA) is designed to interface with 50Ω systems operating in the 10MHz to 500MHz frequency range.

The  MAX19794  is  a  monolithic  VVA  IC  designed  for broadband system applications, including wireless infra -structure  digital  and  spread-spectrum  communication systems  WCDMA/LTE,  TD-SCDMA/TD-LTE,  WiMAX ® , cdma2000 ® ,  GSM/EDGE,  and  MMDS  Base  Stations VSAT/Satellite  Modems.  The  MAX19794  evaluation  kit hosts a microcontroller (MCU) that uses a serial peripheral  interface  to  configure  internal  registers  and  modes. Graphical  User  Interface  (GUI)  software  running  on a  computer  makes  it  simple  to  program  registers  and control  the  device  operation.  The  evaluation  kit  is  fully assembled and tested at the factory.

This document provides a component list, a list of equip -ment  required  to  evaluate  the  device,  a  straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, and artwork for each layer of the printed circuit board (PCB).

## MAX19794 EV Kit Files

| FILE                            | DESCRIPTION       |
|---------------------------------|-------------------|
| MAX19794_EV KIT_B_MARKETING_SCH | Schematic         |
| MAX19794_EV KIT_B_MARKETING_PCB | Layout            |
| MARKETING_BOM_MAX19794_EV KIT_B | Bill of Materials |

WiMAX is a registered certification mark and registered service mark of the WiMAX Forum.

cdma2000 is a registered certification mark and registered service mark of the Telecommunications Industry Association.

## Features

- Easy Evaluation of the MAX19794 IC
- On-Board DAC which Outputs 4V ±5% to Control the Attenuation
- On-Board Power Supply +3.3V and +5V from the MAX32625PICO
- The Operating Frequency Range Extends from 10MHz to 500MHz
- 50Ω SMA Connectors on the RF Ports
- All Critical Peripheral Components Included
- A Micro USB Port to Interface with the PC
- PC Control Software (Available at www.maximinte -grated.com/EVKitSoftware ).

Ordering Information appears at end of data sheet.

Evaluates: MAX19794

<!-- image -->

## Quick Start

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX19794. It is intended as a guide only and some substitutions are possible.

- One RF signal generator capable of delivering minimum 0dBm up to 4.0GHz (Keysight N5182B or equivalent)
- An RF spectrum analyzer with a range of 100kHz to 6.0GHz (Keysight N9020A or equivalent).
- A dual power supply capable of supplying 3V to 5V up to at least 100mA
- A digital multimeter to measure the supply current (Keysight 34461A or equivalent) (optional)
- 50Ω coaxial RF cables with SMA connectors
- A user-supplied Windows-10-based PC

## Procedure

This section provides a step-by-step guide to operate the EV kit and test the device functions. The EV kit is fully assem -bled and tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

Caution: Do not turn on the DC power or RF signal generators until all connections are completed.

## Detailed Description of Hardware and Software

The EV kit hosts a microcontroller platform MAX32625PICO,  MAX5805  2-wire  Serial  12-Bit  DAC along with MAX19794. The purpose of the microcontroller is  to  program the registers of the MAX19794 and DAC. The DAC is used to generate the on-board analog attenu -ation control voltage.

## Download the MAX19794 EV Kit Software

- Download the MAX19794 EV kit software from the link , run the installation file, and install it.
- Run the MAX19794 EV kit software through the desktop icon to open the GUI.

## Note that the GUI runs only on Windows 10 PCs .

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Evaluates: MAX19794

## Powering and Connecting the EV Kit

- Verify all jumpers are in place. Pins 2-3 of header J10 should be shorted. Pins 1 to 2 of J8, J4 should be shorted to use the on-board DAC to control the RF attenuation.
- With its output disabled, connect a 5V power supply to the TP8 and TP7 test points through an amme -ter (apply +5V power supply to the VCC(TP8) and GND(TP7) test points). If available, set the current limit to 50mA.
- If using an external power supply to provide the RF attenuation control voltage, remove the jumper (if con -nected) from J8 and apply external control voltage at pin-2 of J8. Set the gain control voltage to 4V but leave the control supply powered off for now. See Figure 1.
- Connect the MAX19794 EV kit to the PC running the GUI through the USB cable and power on the EV kit. A green LED on the MCU module blinks about once per second.
- Open the Digital VVA GUI.exe software. Click the Device tab and select MAX19794 from the available dropdown. See Figure 2. Click Scan in the COM adapter section and then select the appropriate COM port from the dropdown box. Click Connect . Connected appears on the right bottom of the GUI. See Figure 3 .
- In the configuration panel, select the VCC voltage and reference for the internal and external DACs.
- Enable the power supply(5V) and control supply (4V).
- The supply current from the 5V VCC supply should read approximately 19mA. The device current is 13mA and the LEDs consume 6mA.
- With its output disabled, set the RF signal generator to a 55MHz frequency at 0dBm.
- Connect the output of the RF signal generator to the SMA connector labeled RF IN1 on the EV kit.
- Connect one output RF OUT2 to a spectrum analyzer.
- Terminate the unused ports with a 50Ω SMA terminator.
- Enable the output of the RF signal generator.
- Observe the output at 55MHz with a tone power of about -49 dBm on the spectrum analyzer. Total loss = PRFIn - PRFOut = 0dBm - (-49dBm) = 49dB. The cascaded attenuation is 45dB (at VCTRL = 4V) and insertion loss is 4dB.

## MAX19794 Evaluation Kit

## Note1:

Remove diodes D1, D2 to measure device current.

## Note2:

The RF attenuation control voltage can be set either by an external power supply or by using a DAC on the EV kit. If the on-board DAC is selected, then set the voltage via the CTRL Pin Input widget. Type in the desired voltage between 1 and 4V (based on the operating VCC) and click Enter. Probe the actual control voltage with a multimeter and make small adjustments to the programmed voltage to compensate for any existing offsets. Use the on-board power supply by choosing 3.3V or 5V using J9, and short -ing pins 1 to 2 pins of J10 (Figure 4).

## Verification of the Different Modes

Click the radio buttons in the attenuation control panel to select the mode.

## Analog-Only Mode Control

- If using the on-board DAC ( Figure 4 ), enter the volt -age in the CTRL pin input widget, Press Enter or click Write.
- For example, write 2.5 and see the status log to witness I2C Write: Successful . The tone power is -20.45dBm on the spectrum analyzer. The measured attenuation = 0 - (-20.45) = 20.45dB.

## DAC Mode Control

CAUTION: Do not apply any voltage on the control pin.

- In this mode, attenuation is controlled by the internal 10-Bit DAC. Users can access it by writing into the register 0 by using the DAC Control (0-1023) widget or by dragging the knob on the slider. Verify by read -ing the Register 0 content by clicking continuous read on the Register view panel.
- For example, write 540 and see the status log to wit -ness SPI Write (Register0): Successful . The tone power is -23.29dBm in the spectrum analyzer. The measured attenuation = 0 - (-23.29) = 23.29dB.

## Register Mode Up/Down Operation:

CAUTION: Do not apply any voltage on the control pin.

- In this mode, the 10-bit internal DAC register is loaded with the result of a mathematical operation based on Registers 1 and 2 with the help of pulses on the Up/Down pin.

<!-- formula-not-decoded -->

Evaluates: MAX19794

The device is designed to produce no wraparounds when using UP and DOWN stepping so that the DAC code maxes out at 1023 or goes no lower than 0.

- Register 1 is loaded with the content to be added and Register 2 is loaded with the amount to subtract. Cumulative addition or subtraction happens based on the up or down pulses. Alter the values of Regis -ter 1 and 2 dynamically.
- For Example:

Register1 is loaded with 100 and register 2 is loaded with 25.

Then, add an up pulse (Click UP), loaded content is 100.

For the second up pulse, DAC register content is 200 (100 + 100).

Now for a down pulse (Click Down), DAC register content is 175 (100 + 100 - 25).

Now change register1 content to 200 and generate an up pulse. DAC register content is 375 (100 + 100 -25 + 200).

Now write 35 into Register 2 and generate a down pulse. DAC register content is 340 (100 + 100 - 25 + 200 - 35).

Now generate an up pulse. DAC register content is 540 (100 + 100 - 25 + 200 - 35 + 200).

One can see the final value written into the DAC by clicking the Log. The tone power is -23.29dBm on the spectrum analyzer. The measured attenuation = 0 - (-23.29) = 23.29dB.

- Observe the same attenuation observed by writing 540 to Register 0 in the DAC control mode.

## Analog-Only Mode Control with Alarm Monitoring

In  this  mode,  attenuation  control  is  achieved  with  the analog  voltage  applied  on  the  CTRL  pin.  The  on-chip switches  are  set  to  compare  the  DAC  voltage  to  the CTRL voltage at the comparator input, the output of the comparator  (COMP\_OUT)  trips  from  high  to  low  when VCTRL exceeds the on-chip DAC voltage. Approximate the voltage on the control pin by clicking the Approximate Automatically radio button. For example, apply a voltage of  2.5V  on  the  CTRL pin,  and click  on  the Approximate Automatically  button.  Read  the  approximate  voltage  to be 2.48V.

Evaluates: MAX19794

Figure 1. Connection Setup to Use External Power Supply and Control Voltage

<!-- image -->

Figure 2. Part Selection in Common GUI

<!-- image -->

Figure 3. GUI View

<!-- image -->

## MAX19794 Evaluation Kit

Figure 4. Connection Setup to Use Onboard Power Supply and Control Voltage

<!-- image -->

## Component Suppliers

Note: Indicate using the MAX19794 when contacting these component suppliers.

| SUPPLIER                  | WEBSITE                    |
|---------------------------|----------------------------|
| Murata Mfg. Co., Ltd.     | www.murata.com             |
| Kemet Electronics Pvt Ltd | www.kemet.com              |
| Citizen America Corp.     | www.citizencrystal.com     |
| Keystone Electronics Corp | www.keyelco.com            |
| Sullins Electronics Corp. | www.sullinselectronics.com |
| Maxim Integrated          | www.maximintegrated.com    |

## Evaluates: MAX19794

## Layout Considerations

A good PCB is an essential part of an RF circuit design. The  EV  kit  PCB  can  serve  as  a  guide  for  laying  out  a board using the devices. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss. Use impedance control on all RF signal traces. The exposed paddle must be soldered evenly to the board's ground plane for proper operation. Use abundant throughputs beneath the exposed paddle and between RF traces to minimize undesired RF coupling. To minimize coupling between different sections of the IC, each VCC pin must have a bypass capacitor with low impedance to the clos -est  ground  at  the  frequency  of  interest.  Do  not  share ground  vias  among  multiple  connections  to  the  PCB ground plane. Refer to the layout considerations section of the MAX19794 IC data sheet for more information.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX19794EVKIT# | EV Kit |

# Denotes RoHS-compliance

## MAX19794 Evaluation Kit

## MAX19794 EV Kit Bill of Materials

| ITEM   | REF_DES                      |   QTY | MFG PART #                           | MANUFACTURER              | VALUE                                                                          | DESCRIPTION                                                                                                                 |
|--------|------------------------------|-------|--------------------------------------|---------------------------|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 1      | C1                           |     1 | C0402C201J5GAC; GRM1555C1H201JA01    | KEMET;MURATA              | 200PF                                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 200PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                           |
| 2      | C3, C5, C20-C22              |     5 | EMK105BJ105KV                        | TAIYO YUDEN               | 1UF                                                                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R ;                                   |
| 3      | C4, C6                       |     2 | GRM155R61C104KA88                    | MURATA                    | 0.1UF                                                                          | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                      |
| 4      | C7, C13, C14, C17, C18       |     5 | GRM155R71H102JA01; GCM155R71H102JA37 | MURATA;MURATA             | 1000PF                                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                |
| 5      | C9-C12, C15                  |     5 | GRM155R71H103JA88                    | MURATA                    | 0.01UF                                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                  |
| 6      | C23                          |     1 | JMK212BJ226KG                        | TAIYO YUDEN               | 22UF                                                                           | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=10%; MODEL=M SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |
| 7      | COMP_OUT                     |     1 | 5002 KEYSTONE                        | 5002 KEYSTONE             | N/A                                                                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                       |
| 8      | D1                           |     1 | LTST-C170EKT                         | LITE-ON ELECTRONICS INC   | LTST-C170EKT                                                                   | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                                   |
| 9      | D2                           |     1 | LTST-C170GKT                         | LITE-ON ELECTRONICS INC   | LTST-C170GKT                                                                   | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                                 |
| 10     | GND, TP2, TP5, TP7           |     4 | 5001                                 | KEYSTONE                  | N/A                                                                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;          |
| 11     | J1, J2, J5                   |     3 | 132322 AMPHENOL                      | 132322 AMPHENOL           | 132322                                                                         | CONNECTOR; FEMALE; BOARDMOUNT; SMA END LAUNCH RECEPT. JACK; 0.25IN SQUARE FLANGE; 0.062IN BOARD THICKNESS; STRAIGHT; 5PINS  |
| 12     | J3, J4                       |     2 | PEC02SAAN                            | SULLINS                   | PEC02SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                   |
| 13     | J6, J7                       |     2 | PBC10SAAN                            | SULLINS ELECTRONICS CORP. | PBC10SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                           |
| 14     | J8-J10                       |     3 | PEC03SAAN                            | SULLINS                   | PEC03SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                   |
| 15     | KIT1                         |     1 | MAX32625PICO                         | MAXIM                     | MAX32625PICO                                                                   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITHCOPPER CLAD;             |
| 16     | MH1-MH4                      |     4 | 9032 KEYSTONE                        | 9032 KEYSTONE             | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                              |
| 17     | P8, P9                       |     2 | 801-93-010-10-001000                 | MILL-MAX                  | 801-93-010-10-001000                                                           | IC-SOCKET;SIP; STANDARD SOLDER TAIL; 801 SERIES; 0.024D/0.118L; 0.1IN GRID; STRAIGHT SOCKET; OPENFRAME; 10PINS              |
| 18     | R2                           |     1 | ERJ-2GEJ201 PANASONIC                | ERJ-2GEJ201 PANASONIC     | 200 RESISTOR; 0402; 200 OHM; 5%; 200PPM; 0.1W; THICK FILM                      | 200 RESISTOR; 0402; 200 OHM; 5%; 200PPM; 0.1W; THICK FILM                                                                   |
| 19     | R3, R4                       |     2 | ERJ-2GEJ472                          | PANASONIC                 | 4.7K                                                                           | RESISTOR; 0402; 4.7K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                     |
| 20     | R5                           |     1 | RC0402JR-071ML                       | YAGEO                     | 1M                                                                             | RES; SMT (0402); 1M; 5%; +/-100PPM/DEGC; 0.063W                                                                             |
| 21     | R6, R10                      |     2 | ERJ-2GEJ102                          | PANASONIC                 | 1K                                                                             | RESISTOR; 0402; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                       |
| 22     | R7, R11                      |     2 | ERJ-2GEJ100                          | PANASONIC                 |                                                                                | 10 RESISTOR; 0402; 10 OHM; 5%; 200PPM; 0.1W; THICK FILM                                                                     |
| 23     | SU3, SU4, SU8-SU10           |     5 | QPC02SXGN-RC                         | SULLINS ELECTRONICS CORP. | QPC02SXGN-RC                                                                   | CONNECTOR; FEMALE; 0.100IN CC; OPENTOP; JUMPER; STRAIGHT; 2PINS                                                             |
| 24     | TP8                          |     1 | 5000                                 | KEYSTONE                  | N/A                                                                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;            |
| 25     | U1                           |     1 | MAX5805BAUB+                         | MAXIM                     | MAX5805BAUB+                                                                   | IC; DAC; ULTRA-SMALL; SINGLE-CHANNEL; 12-BIT BUFFERED OUTPUT VOLTAGE DACS WITH INTERNAL REFERENCE AND I2C INTERFACE; UMAX10 |
| 26     | U2                           |     1 | MAX19794ETX+                         | MAXIM                     | MAX19794ETX+                                                                   | IC; ATTEN; 10 MHZ TO 500 MHZ DUAL ANALOG VOLTAGE VARIABLE ATTENUATOR WITH ON-CHIP 10-BIT SPI- CONTROLLED DAC; TQFN36-EP     |
| 27     | PCB                          |     1 | MAX19794                             | MAXIM                     | PCB                                                                            | PCB:MAX19794                                                                                                                |
| 28     | R1, R8, R9, R12-R15, R17-R19 |     0 | N/A                                  | N/A                       | OPEN                                                                           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                            |
| 29     | C2, C8, C16, C19             |     0 | N/A                                  | N/A                       | OPEN                                                                           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                     |
| TOTAL  |                              |    60 |                                      |                           |                                                                                |                                                                                                                             |

Evaluates: MAX19794

## MAX19794 EV Kit Schematics

<!-- image -->

## MAX19794 EV Kit Schematics (continued)

<!-- image -->

## MAX19794 EV Kit Schematics (continued)

<!-- image -->

## MAX19794 EV Kit Schematics (continued)

<!-- image -->

## MAX19794 EV Kit PCB Layouts

MAX19794 EV Kit PCB Layout-Silk Top

<!-- image -->

MAX19794 EV Kit PCB Layout-Top

<!-- image -->

MAX19794 EV Kit PCB Layout-Internal2

<!-- image -->

MAX19794 EV Kit PCB Layout-Internal3

<!-- image -->

## MAX19794 EV Kit PCB Layouts (continued)

MAX19794 EV Kit PCB Layout-Bottom

<!-- image -->

MAX19794 EV Kit PCB Layout-Silk Bottom

<!-- image -->

## MAX19794 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX19794