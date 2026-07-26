<!-- lastmod 2022-08-02 -->
## MAX1530 Evaluation Kit

## General Description

The  MAX15303  evaluation  kit  (EV  kit)  is  a  proven application circuit design for the MAX15303 digital DC-DC controller integrated circuit (IC). The EV kit allows the user to easily modify and test the EV kit with different operating conditions. The EV kit can be used as a standalone board if  desired.  However,  to  take  full  advantage  of  the  IC's capability, the user must connect the EV kit to a PC with the  Maxim  PowerTool  MAXPOWERTOOL002#  USB-toPMBus™ interface dongle and then control and monitor the EV kit with Maxim's digital PowerTool graphical user interface (GUI) software. The PowerTool GUI allows a PC to  control  the  PMBus  interface  and  to  collect  real-time data  from  the  EV  kit.  The  PowerTool  is  Windows  XP ® , Windows Vista ® , and Windows ® 7 compatible. It provides a simple interface for exercising the features of the IC.

Ordering Information appears at end of data sheet.

PMBus is a trademark of SMIF, Inc.

InTune is a trademark of Maxim Integrated Products, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX1530

## Features and Benefits

- InTune™ Digital Point-of-Load (PoL) Switched-Mode Power Supply (SMPS)
- Digital State-Space Control
- Dual-Edge-Modulated Pulse-Width Modulation (PWM)
- 300kHz to 1MHz Switching Frequency
- 5V to 12V Input Voltage Range Using Linear Mode
- 6.5V to 12V Input Voltage Range Using BabyBuck Mode
- 0.6V to 3.3V Output Voltage Range
- 6A Output Current Capability
- Single-Phase Operation
- Pin-Strap or PMBus Configuration
- SMB Connectors for Low-Noise Measurements
- Connectors for Multiple-Rail Evaluation
- PMBus Interface for Control and Monitoring
- High-Speed Serial-Port Diagnostics

<!-- image -->

## MAX15303 Evaluation Kit

## Evaluates: MAX15303

Figure.1 System Setup

<!-- image -->

## Quick Start

## Required Equipment

- MAX15303 EV kit
- MAXPOWERTOOL002# USB-to-PMBus interface kit
- 6.5V to 12V, 5A DC supply
- 100MHz oscilloscope with ≥ 2 channels
- Electronic load
- Digital multimeters (DMMs)
- Windows XP, Windows Vista, or Windows 7 PC and an available USB port
- RG-174 BNC-to-SMB cables for oscilloscope connection

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation and begin evaluation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the digital PowerTool software and PowerTool GUI, and follow the automated installation procedure.
- 2) Connect the MAXPOWERTOOL002# interface dongle to the PC using the supplied USB cable.
- 3) Complete  the driver installation process for the USB-to-PMBus interface device.
- 4) Start  the  PowerTool  GUI  and  verify  that  the  GUI connects to the interface and that the interface device LED turns green.
- 5) Connect the power supply to one of the EV kit power input connectors using banana-plug test leads to J11 or by using a 2.5mm DC plug (center positive) to J17. Be careful to observe correct polarity.
- 6) Connect  the  load  to  the  EV  kit's  power  output

│

## MAX15303 Evaluation Kit

terminals (VOUT, J15) using banana-plug test leads or through the screw terminals.

- 7) Connect  the  oscilloscope  to  the  VOUT  (J14)  and LX/20 (J13) connectors as desired, using the BNCto-SMB coaxial cables. Note that the voltage at the LX connector is divided 20:1 from the actual LX voltage on the board. Note: Alternatively, connect using conventional scope probes.
- 8) Connect the PowerTool to J5 with the supplied 16-pin ribbon cable. Be sure the red stripe is at J5-1.
- 9) Check that the HSSP switch (SW1) is in the NORMAL position.
- 10)  Set the EV kit output voltage with the supplied shunts on the J8 header (SET).
- 11)  Set the EV kit SMBus slave address with the supplied shunts on the J6 header (ADDR0).
- 12)  Set  the  EV  kit  to  single-mode  operation  with  the supplied shunts on J10.
- 13)  Set the EV kit output-enable switch (SW2) to the OFF position.
- 14)  Turn on the input power supply.
- 15)  Click Yes on  the  GUI  interface  to  force  the  GUI  to rescan the bus addresses. The GUI should detect the EV kit and display a column of PMBus information for the MAX15303 device.
- 16)  Enable the EV kit output by placing SW2 in the ON position, or by using the GUI PMBus enable control on the Dashboard tab.

## Detailed Description of Hardware

## Setting the Output Voltage

Configure the output voltage by connecting a resistance between the SET pin of the MAX15303 and GND (refer to  Table  1  in  the  MAX15303  IC  data  sheet).  Do  this by  placing  a  shunt  across  any  one  of  the  five-labeled locations of header J8 on the EV kit. Make additional pinstrap settings by removing the jumper from J8 and placing a leaded resistor across J9.

Once input power is applied to the EV kit, the SET resistor is read. The output-voltage set point can be changed at any time by sending a new VOUT\_COMMAND value from the GUI through the PMBus interface.

## Setting the PMBus Slave Address

Configure  the  EV  kit  slave  address  by  connecting resistors  between  ADDR0  and  GND  and  ADDR1  and GND on the IC (refer  to Table  4a  in  the  MAX15303  IC data sheet).

Resistor R46 on the EV kit connects to ADDR1, selecting both the address column and setting the current-limit voltage for the inductor DCR signal.

Select  the  ADDR0  resistor  value,  from  one  of  four possible values, by placing a shunt in one of the labeled locations on header J6. Make additional pin-strap settings by  removing  the  jumper  from  J6  and  placing  a  leaded resistor across J7.

The ADDR0 and ADDR1 resistors are read once when input  power  is  applied  to  the  EV  kit;  the  slave  address cannot be changed through the PMBus interface.

## LED Indicators

The EV kit features two LED indicators, one to show that auxiliary power is present and one to show that the IC's output power is good.

The  +3.3V  VAUX  LED  (D2)  illuminates  green  when the  on-board  3.3V  auxiliary  supply  is  available.  VAUX becomes  available  when  an  input  voltage  is  applied  to VIN at J11 or J17.

The PG LED (D3) illuminates green when the following conditions are met:

- VIN is present
- VAUX is present
- The IC asserts power good (PG pin is open)

## Enable Switch

The EV kit includes a switch (SW2) to control the IC's EN input. This switch has two labeled positions:

- ON: EN pin (EN\_BUS) is pulled high  by  the  threestated debounce circuit
- OFF: EN pin (EN\_BUS) is driven low by the debounce circuit

## HSSP-NORMAL Switch

The EV kit's HSSP-NORMAL switch (SW1) must be set to the NORMAL position for proper operation.

## SMB Connectors

The EV kit includes easy-to-use SMB connectors for precision monitoring of the output voltage (VOUT) at J14, and the switch node (LX) at J13. These connectors are  back terminated  with  50Ω  resistance  and  can  be  connected directly to oscilloscope inputs for low-noise measurement.

Note: The  LX  signal  passes  through  a  20:1  resistive divider to prevent noise propagation from the switch node and to protect the scope inputs from high voltage. Be sure to adjust the oscilloscope probe setup to account for this attenuation of the LX signal.

## MAX15303 Evaluation Kit

An  additional  SMB  input  connector  is  provided  for  the SYNC pin at J3, allowing an external clock source to be supplied to the IC.

## Output Current Calibration

One feature  of  the  IC  is  the  ability  to  report  the  actual load current. This functionality relies on properly calibrated  IOUT\_CAL\_GAIN  and  IOUT\_CAL\_OFFSET  values, which have been calculated and stored in the IC firmware during the EV kit production process. Any change to the output inductor requires recalibrating these parameters to ensure that the GUI reports an accurate output current. This is a simple process that is described in Application Note  5601: Current  Calibration  Procedure  for  InTune Digital Power , which is available on the Maxim website.

## System Evaluation with Multiple EV Kits

Multiple Maxim Intune EV kits can be coupled together to emulate a fully PMBus-enabled multiple-rail system. Each EV kit must be set to a different SMBus address. Power must  be  applied  to  each  EV  kit.  Follow  these  steps  to create a multiple-rail system:

- 1) Set  the  address  for  each  EV  kit  by  moving  the address jumper.
- 2) Set the output voltage for each EV kit by moving the VOUT  jumper  ( Note: VOUT  can  be  changed  later through the PMBus interface).
- 3) Connect multiple EV kits together using connectors J1 and J2.
- 4) Connect the PowerTool USB dongle to any one of the EV kits.
- 5) Apply a power connection to every EV kit.
- 6) Set  the  enable  switches  to  the  ENABLE  or  ON positions,  except  for  one,  which  should  be  left  in the DISABLE or OFF position. Note that the enable signals are combined together.
- 7) Apply the input voltage.
- 8) Start  the  PowerTool  GUI  to  begin  monitoring  the devices.

Figure 2 provides an example of one MAX15301 and two MAX15303 EV kits connected together.

Figure 2. Multiple EV Kits Connected Together

<!-- image -->

│

## Performance Characteristics

Figure 3. Efficiency vs. Load

<!-- image -->

Figure 4. Efficiency vs. Load

<!-- image -->

Figure 5. IOUT vs. Read\_IOUT

<!-- image -->

## Performance Characteristics (continued)

Figure 6. Internal Temprature Read vs. Internal Temprature

<!-- image -->

Figure 7. External Temprature Read vs. External Temprature

<!-- image -->

Figure 8. Load Transient

<!-- image -->

## Performance Characteristics (continued)

Figure 9. Output-Voltage Ripple

<!-- image -->

## Component List

Refer to file '15303EVK1\_RevC\_BOM.xlsx' attached to this PDF for component information.

Figure 10. Startup Waveform

<!-- image -->

Figure 11. Shutdown Waveform

<!-- image -->

│

## Evaluates: MAX15303

Figure 12a. MAX15303 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

Figure 12b. MAX15303 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

## Evaluates: MAX15303

Figure 12c. MAX15303 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

Evaluates: MAX15303

Figure 13. MAX15303 EV Kit Component Placement Guide-First Layer Assembly (Top View)

<!-- image -->

│

Evaluates: MAX15303

Figure 14. MAX15303 EV Kit PCB Layout-First Layer (Top View)

<!-- image -->

│

Evaluates: MAX15303

Figure 15. MAX15303 EV Kit PCB Layout-Layer 2 (Top View)

<!-- image -->

│

Evaluates: MAX15303

Figure 16. MAX15303 EV Kit PCB Layout-Layer 3 (Top View)

<!-- image -->

│

## Evaluates: MAX15303

Figure 17. MAX15303 EV Kit PCB Layout-Bottom Layer (Top View)

<!-- image -->

│

Evaluates: MAX15303

Figure 18. MAX15303 EV Kit Component Placement Guide-Bottom Assembly (Bottom View)

<!-- image -->

│

## Ordering Information

| PART             | TYPE                                    |
|------------------|-----------------------------------------|
| MAX15303EVKIT1   | MAX15303 EV Kit                         |
| MAXPOWERTOOL002# | PowerTool USB-to-PMBus Interface Dongle |

# Denotes RoHS compliant.

Evaluates: MAX15303

## MAX15303 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/14           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX15303