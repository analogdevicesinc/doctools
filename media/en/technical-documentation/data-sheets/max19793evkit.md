<!-- lastmod 2022-08-02 -->
## MAX19793 Evaluation Kit

## General Description

The  MAX19793  evaluation  kit  (EV  kit)  simplifies  the evaluation of the MAX19793. The MAX19793 dual general-purpose analog voltage variable attenuator (VVA) is designed to interface with 50Ω systems operating in the 1500MHz to 6000MHz frequency range.

The  MAX19793  is  a  monolithic  VVA  IC  designed  for broadband system applications, including wireless infra -structure  digital  and  spread-spectrum  communication systems  WCDMA/LTE,  TD-SCDMA/TD-LTE,  WiMAX ® , cdma2000 ® ,  GSM/EDGE,  and  MMDS  base  stations VSAT/satellite  modems.    The  MAX19793  evaluation  kit hosts a microcontroller (MCU) that uses a serial peripheral  interface  to  configure  internal  registers  and  modes. Graphical  User  Interface  (GUI)  software  running  on a  computer  makes  it  simple  to  program  registers  and control  the  device  operation.  The  evaluation  kit  is  fully assembled and tested at the factory.

This document provides a component list, a list of equip -ment  required  to  evaluate  the  device,  a  straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, and artwork for each layer of the printed circuit board (PCB).

## MAX19793 EV Kit Files

| FILE                            | DECRIPTION        |
|---------------------------------|-------------------|
| MAX19793_EV KIT_B_MARKETING_SCH | Schematic         |
| MAX19793_EV KIT_B_MARKETING_PCB | Layout            |
| MARKETING_BOM_MAX19793_EV KIT_B | Bill of Materials |

WiMAX is a WiMAX Forum registered certification mark and registered service mark

cdma2000 is a Telecommunications Industry Association registered certification mark and registered service mark

## Features

- Easy Evaluation of the MAX19793 IC
- On-Board DAC which Outputs 4V ± 5% to Control the Attenuation
- On-Board Power Supply +3.3V and +5V from MAX32625PICO
- The Operating Frequency Range Extends from 1500MHz to 6000MHz
- 50Ω SMA Connectors on the RF Ports
- All Critical Peripheral Components Included
- A Micro-USB Port to Interface with the PC
- [PC Control Software (Available at www.maximintegrated.com/EVKitSoftware )](http://www.maximintegrated.com/EVKitSoftware)

Ordering Information appears at end of data sheet.

Evaluates: MAX19793

<!-- image -->

## Quick Start

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX19793. It is intended as a guide only and some substitutions are possible.

- One RF signal generator capable of delivering minimum 0dBm up to 4.0GHz (Keysight N5182B or equivalent)
- An RF spectrum analyzer with a range of 100kHz to 6.0GHz (Keysight N9020A or equivalent)
- A dual-power supply capable of supplying 3V to 5V up to at least 100mA
- A digital multimeter to measure the supply current (Keysight 34461A or equivalent) (optional)
- 50Ω coaxial RF cables with SMA connectors
- A user-supplied Windows-10 based PC

## Procedure

This section provides a step-by-step guide to operate the EV kit and test the device functions. The EV kit is fully assem -bled and tested. Follow the instructions in the connections and setup section for proper device evaluation.

CAUTION: Do not turn on the DC power or RF signal generators until all connections are completed.

## Detailed Description of Hardware and Software

The EV kit hosts a microcontroller platform MAX32625PICO,  MAX5805  2-wire  Serial  12-Bit  DAC along with the MAX19793. The microcontroller programs the registers of the MAX19793 and DAC. The DAC gener -ates the on-board analog attenuation control voltage.

## Download the MAX19793 EV Kit Software

- Download the MAX19793 EV kit software from the link , run the installation file, and install it.
- Run the MAX19793 EV kit software through the desktop icon to open the GUI.

Note that the GUI runs only on Windows 10 PCs.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Evaluates: MAX19793

## Powering and Connecting the EV Kit

- Verify all jumpers are in place. Pins 2 to 3 of header J10 should be shorted. Pins 1 to 2 of J8, J4 should be shorted to use the on-board DAC to control the RF attenuation.
- With its output disabled, connect a 5V power supply to the TP8 and TP7 test points through an ammeter (apply +5V power supply to the VCC (TP8) and GND (TP7) test points). If available, set the current limit to 50mA.
- If using an external power supply to provide the RF attenuation control voltage, remove the jumper (if con -nected) from J8 and apply external control voltage at pin-2 of J8. Set the gain control voltage to 4V but leave the control supply powered off for now ( Figure 1).
- Connect the MAX19793 EV kit to the PC running the GUI through the USB cable and power on the EV kit. A green LED on the MCU module blinks once per second.
- Open the Digital VVA GUI.exe software.  Click the Device tab and select MAX19793 from the available dropdown (Figure 2). Click Scan in the COM adapter section and then select the appropriate COM port from the dropdown. Click Connect . Connected appears on the right bottom of the GUI ( Figure 3).
- In the configuration panel, select the VCC voltage and reference for internal and external DACs.
- Enable the power supply(5V) and control supply (1V).
- The supply current from the 5V VCC supply should read approximately 19mA. The device current is 13mA and the LEDs consume 6mA.
- With its output disabled, set the RF signal generator to a 3500MHz frequency at 0dBm.
- Connect the output of the RF signal generator to the SMA connector labeled RF IN1 on the EV kit.
- Connect one output RF OUT2 to a spectrum analyzer.
- Terminate the unused ports with a 50Ω SMA terminator.
- Enable the output of the RF signal generator.
- Observe the output at 3500MHz with a tone power of about -54.2 dBm on the spectrum analyzer. Total loss = PRFIn - PRFOut = 0dBm - (-54.2dBm) = 54.2dB. The cascaded attenuation is 46.2dB (at VCTRL = 4V) and insertion loss is 8dB.

## MAX19793 Evaluation Kit

## Note 1:

Remove Diode D1, D2 for device current measurement

## Note 2:

The RF attenuation control voltage can be set either by an external power supply or by using a DAC on the EV kit. If the on-board DAC is selected, then set the voltage through the CTRL Pin Input widget. Type the desired volt -age between 1V and 4V (based on the operating VCC) and  click  Enter.  Probe  the  actual  control  voltage  with a  multimeter  and  make  small  adjustments  to  the  pro -grammed voltage to compensate for any existing offsets. Use the on-board power supply by choosing 3.3V or 5V using J9, and shorting pins 1 to 2 of J10 (Figure 4 ).

## Verifying the Different Modes

In the attenuation control panel, click the radio buttons to select the mode.

## Analog-Only Mode Control

The control voltage is applied through an external DAC or a DC voltage source.

To  use  the  external  DAC,  set  jumper  J8  to  DACCTRL and enter the value (1V to 4V) in the CTRL Pin Input box. Click Write.

To use an external DC voltage source, remove jumper J8 and connect a voltage source to pin 2 of J8 ( Figure 1).

## DAC Mode Control

The control voltage can be controlled through an on-chip 10-bit DAC. Remove Jumper J8.

The  DAC  voltage  is  controlled  by  the  DAC  Control (0-1023) box or by dragging the knob on the slider. Click Write to update the value.

Caution: Do not apply any voltage on the control pin.

## Register Mode Up/Down Operation

Caution: Do not apply any voltage on the control pin.

- In this mode, the 10-bit internal DAC register is loaded with the result of a mathematical operation based on Registers 1 and 2 with the help of pulses on the Up/Down pin.

<!-- formula-not-decoded -->

The device is designed to produce no wraparounds when using UP and DOWN stepping so that the DAC code maxes out at 1023 or goes no lower than 0.

Evaluates: MAX19793

- Register 1 is loaded with the content to add and register 2 with the value to subtract. Cumulative addition or subtraction happens based on the up or down pulses. The values of register 1 and 2 can be altered dynamically.
- For example:
- Register1 is loaded with 100 and register 2 is loaded with 25.
- Send an up pulse (Click UP), the loaded content is 100.
- For the second up pulse, DAC register content is 200 (100 + 100).
- Now for a down pulse (Click Down), DAC register content is 175 (100 + 100 - 25).
- Now change register 1 content to 200, and gen -erate an up pulse, DAC register content is 375 (100 + 100 - 25 + 200).
- Now write 35 into register 2, and generate a down pulse, DAC register content is 340 (100 + 100 - 25 + 200 - 35).
- Now generate an up pulse, DAC register content is 540 (100 + 100 - 25 + 200 - 35 + 200).
- Check the final value written into the DAC by clicking the Log. The tone power is -28.64dBm on the spectrum analyzer. Measured attenuation = 0 - (-28.64) = 28.64dB.
- Observe the same attenuation observed by writing 540 to register 0 in the DAC control mode.

CAUTION: Do not apply any voltage on the control pin.

## Analog-Only Mode Control with Alarm Monitoring

In  this  mode,  attenuation  control  is  achieved  by  means of the analog voltage applied on the CTRL pin. The onchip switches are set to compare the DAC voltage to the CTRL voltage at the comparator input, and the output of the comparator (COMP\_OUT) trips from high to low when VCTRL exceeds the on-chip DAC voltage. Approximate the  voltage  on  the  control  pin  by  clicking  Approximate Automatically.  For  example,  apply  a  voltage  of  2.5V  on the CTRL pin, and click Approximate Automatically. Read the approximate voltage as 2.49V.

Evaluates: MAX19793

Figure 1. Connection Setup to Use the External Power Supply and Control Voltage

<!-- image -->

## MAX19793 Evaluation Kit

Figure 2. Part Selection in Common GUI

<!-- image -->

Figure 3. GUI View

<!-- image -->

## MAX19793 Evaluation Kit

Figure 4. Connection Setup to Use the Onboard Power Supply and Control Voltage

<!-- image -->

## Component Suppliers

Note: Indicate using the MAX19793 when contacting these component suppliers.

| SUPPLIER                  | WEBSITE                    |
|---------------------------|----------------------------|
| Murata Mfg. Co., Ltd.     | www.murata.com             |
| Kemet Electronics Pvt Ltd | www.kemet.com              |
| Citizen America Corp.     | www.citizencrystal.com     |
| Keystone Electronics Corp | www.keyelco.com            |
| Sullins Electronics Corp. | www.sullinselectronics.com |
| Maxim Integrated          | www.maximintegrated.com    |

## Evaluates: MAX19793

## Layout Considerations

A good PCB is an essential part of an RF circuit design. The EV kit PCB serves as a guide for laying out a board using  the  devices.  Keep  traces  carrying  RF  signals  as short  as  possible  to  minimize  radiation  and  insertion loss. Use impedance control on all RF signal traces. The exposed paddle must be soldered evenly to the board's ground plane for proper operation. Use abundant throughputs beneath the exposed paddle and between RF traces to minimize undesired RF coupling. To minimize coupling between the different  sections  of  the  IC,  each  VCC  pin must have a bypass capacitor with low impedance to the closest ground at the frequency of interest. Do not share ground  vias  among  multiple  connections  to  the  PCB ground plane. Refer to the Layout considerations section of the MAX19793 IC data sheet for more information.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX19793EVKIT# | EV Kit |

# Denotes RoHS compliance

## MAX19793 EV Kit Bill of Materials

| NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE                                                              |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| ITEM                                                             | REF_DES                                                          | QTY                                                              | MFG PART #                                                       | MANUFACTURER                                                     | DESCRIPTION                                                                                                                 |
| 1                                                                | C1                                                               | 1                                                                | C0402C201J5GAC; GRM1555C1H201JA01                                | KEMET;MURATA                                                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 200PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                           |
| 2                                                                | C3, C5, C20-C22                                                  | 5                                                                | EMK105BJ105KV                                                    | TAIYO YUDEN                                                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=- 55 DEGC TO +85 DEGC; TC=X5R ;                                  |
| 3                                                                | C4, C6                                                           | 2                                                                | GRM155R61C104KA88                                                | MURATA                                                           | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                      |
| 4                                                                | C7, C13, C14, C17, C18                                           | 5                                                                | GRM155R71H102JA01; GCM155R71H102JA37                             | MURATA;MURATA                                                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                |
| 5                                                                | C10, C11, C15                                                    | 3                                                                | C0402C399C5GAC                                                   | KEMET                                                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 3.9PF; 50V; TOL=+-0.25PF; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+/-                  |
| 6                                                                | C23                                                              | 1                                                                | JMK212BJ226KG                                                    | TAIYO YUDEN                                                      | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=10%; MODEL=M SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |
| 7                                                                | COMP_OUT                                                         | 1                                                                | 5002                                                             | KEYSTONE                                                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                       |
| 8                                                                | D1                                                               | 1                                                                | LTST-C170EKT                                                     | LITE-ON ELECTRONICS INC                                          | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                                   |
| 9                                                                | D2                                                               | 1                                                                | LTST-C170GKT                                                     | LITE-ON ELECTRONICS INC                                          | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                                 |
| 10                                                               | GND, TP2, TP5, TP7                                               | 4                                                                | 5001                                                             | KEYSTONE                                                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;          |
| 11                                                               | J1, J2, J5                                                       | 3                                                                | 132322                                                           | AMPHENOL                                                         | CONNECTOR; FEMALE; BOARDMOUNT; SMA END LAUNCH RECEPT. JACK; 0.25IN SQUARE FLANGE; 0.062IN BOARD THICKNESS; STRAIGHT; 5PINS  |
| 12                                                               | J3, J4                                                           | 2                                                                | PEC02SAAN                                                        | SULLINS                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                   |
| 13                                                               | J6, J7                                                           | 2                                                                | PBC10SAAN                                                        | SULLINS ELECTRONICS CORP.                                        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                           |
| 14                                                               | J8-J10                                                           | 3                                                                | PEC03SAAN                                                        | SULLINS                                                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                   |
| 15                                                               | KIT1                                                             | 1                                                                | MAX32625PICO                                                     | MAXIM                                                            | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;            |
| 16                                                               | MH1-MH4                                                          | 4                                                                | 9032                                                             | KEYSTONE                                                         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                   |
| 17                                                               | P8, P9                                                           | 2                                                                | 801-93-010-10-001000                                             | MILL-MAX                                                         | IC-SOCKET;SIP; STANDARD SOLDER TAIL; 801 SERIES; 0.024D/0.118L; 0.1IN GRID; STRAIGHT SOCKET; OPEN FRAME; 10PINS             |
| 18                                                               | R2                                                               | 1                                                                | ERJ-2GEJ201                                                      | PANASONIC                                                        | RESISTOR; 0402; 200 OHM; 5%; 200PPM; 0.1W; THICK FILM                                                                       |
| 19                                                               | R3, R4                                                           | 2                                                                | ERJ-2GEJ472                                                      | PANASONIC                                                        | RESISTOR; 0402; 4.7K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                     |
| 20                                                               | R5                                                               | 1                                                                | RC0402JR-071ML                                                   | YAGEO                                                            | RES; SMT (0402); 1M; 5%; +/-100PPM/DEGC; 0.063W                                                                             |
| 21                                                               | R6, R10                                                          | 2                                                                | ERJ-2GEJ102                                                      | PANASONIC                                                        | RESISTOR; 0402; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                       |
| 22                                                               | R7, R11                                                          | 2                                                                | ERJ-2GEJ100                                                      | PANASONIC                                                        | RESISTOR; 0402; 10 OHM; 5%; 200PPM; 0.1W; THICK FILM                                                                        |
| 23                                                               | SU3, SU4, SU8- SU10                                              | 5                                                                | QPC02SXGN-RC                                                     | SULLINS ELECTRONICS CORP.                                        | CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                            |
| 24                                                               | TP8                                                              | 1                                                                | 5000                                                             | KEYSTONE                                                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;            |
| 25                                                               | U1                                                               | 1                                                                | MAX5805BAUB+                                                     | MAXIM                                                            | IC; DAC; ULTRA-SMALL; SINGLE-CHANNEL; 12-BIT BUFFERED OUTPUT VOLTAGE DACS WITH INTERNAL REFERENCE AND I2C INTERFACE; UMAX10 |
| 26                                                               | U2                                                               | 1                                                                | MAX19793ETX+                                                     | MAXIM                                                            | IC; ATTEN; 1500 MHZ TO 6000 MHZ DUAL ANALOG VOLTAGE VARIABLE ATTENUATOR WITH ON-CHIP 10-BIT SPI-CONTROLLED DAC; TQFN36-EP   |
| 27                                                               | PCB                                                              | 1                                                                | MAX19793                                                         | MAXIM                                                            | PCB:MAX19793                                                                                                                |
| 28                                                               | R1, R8, R9, R12-R15, R17-R19                                     | 0                                                                | N/A                                                              | N/A                                                              | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                            |
| 29                                                               | C2, C8, C9, C12, C16, C19                                        | 0                                                                | N/A                                                              | N/A                                                              | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                     |
| TOTAL                                                            | TOTAL                                                            | 58                                                               |                                                                  |                                                                  |                                                                                                                             |

Evaluates: MAX19793

## MAX19793 EV Kit Schematics

<!-- image -->

## MAX19793 EV Kit Schematics (continued)

<!-- image -->

## MAX19793 Evaluation Kit

## MAX19793 EV Kit Schematics (continued)

<!-- image -->

## MAX19793 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX19793

## MAX19793 EV Kit PCB Layouts

MAX19793 EV Kit PCB Layout-Silk Top

<!-- image -->

MAX19793 EV Kit PCB Layout-Top

<!-- image -->

Evaluates: MAX19793

MAX19793 EV Kit PCB Layout-Internal2

<!-- image -->

MAX19793 EV Kit PCB Layout-Internal3

<!-- image -->

## MAX19793 EV Kit PCB Layouts (continued)

MAX19793 EV Kit PCB Layout-Bottom

<!-- image -->

MAX19793 EV Kit PCB Layout-Silk Bottom

<!-- image -->

## MAX19793 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2 /2 1          | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VSHFL¿FDWLRQV ZLWKRXW QRWLFH DW DQ\ WLPH

<!-- image -->

Evaluates: MAX19793