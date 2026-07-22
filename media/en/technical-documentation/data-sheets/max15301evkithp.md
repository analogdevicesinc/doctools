<!-- lastmod 2022-08-02 -->
## MAX1530 Evaluation Kit

## General Description

The  MAX15301  evaluation  kit  (EV  kit)  is  a  proven application circuit design for the MAX15301 digital DC-DC controller integrated circuit (IC). The EV kit allows the user to easily modify and test the EV kit with different operating conditions. The EV kit can be used as a standalone board if  desired.  However,  to  take  full  advantage  of  the  IC's capability, the user must connect the EV kit to a PC with the  Maxim  PowerTool  MAXPOWERTOOL002#  USB-toPMBus™ interface dongle and then control and monitor the EV kit with Maxim's digital PowerTool graphical user interface (GUI) software. The PowerTool GUI allows a PC to  control  the  PMBus  interface  and  to  collect  real-time data  from  the  EV  kit.  The  PowerTool  is  Windows  XP ® , Windows Vista ® , and Windows ® 7 compatible. It provides a simple interface for exercising the features of the IC.

The EV kit ships with the MAX15301AA02+CJK installed, but  can  also  be  used  to  evaluate  other  pin-compatible MAX15301xxxx ICs with replacement of U1. Request a free sample when ordering the EV kit.

Ordering Information appears at end of data sheet.

PMBus is a trademark of SMIF, Inc.

InTune is a trademark of Maxim Integrated Products, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX1530AA02

## Features and Benefits

- InTune™ Digital Point-of-Load (PoL) Switched-Mode Power Supply (SMPS) Controller
- Digital State-Space Control
- Dual-Edge-Modulated Pulse-Width Modulation (PWM)
- 300kHz to 1MHz Switching Frequency
- 5V to 14V Input Voltage Range Using Linear Mode
- 6.5V to 14V Input Voltage Range Using BabyBuck Mode
- 0.6V to 3.3V Output Voltage Range
- 25A Output Current Capability
- Pin-Strap or PMBus Configuration
- SMB Connectors for Low-Noise Measurements
- Connectors for Multiple-Rail Evaluation
- PMBus Interface for Control and Monitoring

<!-- image -->

## MAX15301 Evaluation Kit

## Evaluates: MAX15301AA02

Figure 1. System Setup

<!-- image -->

## Quick Start

## Required Equipment

- MAX15301 EV kit
- MAXPOWERTOOL002# USB-to-PMBus interface kit
- 6.5V to 12V, 15A DC supply
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
- 5) Connect the power supply to one of the EV kit power input connectors using banana-plug test leads to J9 or by using a 2.5mm DC plug (center positive) to J11. Be careful to observe correct polarity.

│

## MAX15301 Evaluation Kit

- 6) Connect  the  load  to  the  EV  kit's  power  output terminals (VOUT, J12) using banana-plug test leads or through the screw terminals.
- 7) Connect  the  oscilloscope  to  the  VOUT  (CJ2)  and LX/20 (CJ3) connectors as desired, using the BNCto-SMB coaxial cables. Note that the voltage at the LX connector is divided 20:1 from the actual LX voltage on the board. Note: Alternatively, connect using conventional scope probes.
- 8) Connect the PowerTool to J3 with the supplied 16-pin ribbon cable. Be sure the red stripe is at J3-1.
- 9) Check that the HSSP switch (SW) is in the NORMAL position.
- 10)  Set the EV kit output voltage with the supplied shunts on the J6 header (SET).
- 11)  Set the EV kit SMBus slave address with the supplied shunts on the J5 header (ADDR0).
- 12)  Set  the  EV  kit  to  single-mode  operation  with  the supplied shunts on J8.
- 13)  Set the EV kit output-enable switch (SW1) to the OFF position.
- 14)  Turn on the input power supply.
- 15)  Click Yes on  the  GUI  interface  to  force  the  GUI  to rescan the bus addresses. The GUI should detect the EV kit and display a column of PMBus information for the MAX15301 device.
- 16)  Enable the EV kit output by placing SW1 in the ON position, or by using the GUI PMBus enable control on the Dashboard tab.

## Detailed Description of Hardware

## Setting the Output Voltage

Configure the output voltage by connecting a resistance between the SET pin of the MAX15301 and GND (refer to  Table  1  in  the  MAX15301  IC  data  sheet).  Do  this by  placing  a  shunt  across  any  one  of  the  five-labeled locations of header J6 on the EV kit. Make additional pinstrap settings by removing the jumper from J6 and placing a leaded resistor across J13.

Once input power is applied to the EV kit, the SET resistor is read. The output-voltage set point can be changed at any time by sending a new VOUT\_COMMAND value from the GUI through the PMBus interface.

## Setting the PMBus Slave Address

Configure  the  EV  kit  slave  address  by  connecting resistors  between  ADDR0  and  GND  and  ADDR1  and GND on the IC (refer  to Table  4a  in  the  MAX15301  IC data sheet).

## Evaluates: MAX15301AA02

Resistor R1 on the EV kit connects to ADDR1, selecting both  the  address  column  and  setting  the  current-limit voltage for the inductor DCR signal.

Select  the  ADDR0  resistor  value,  from  one  of  four possible values, by placing a shunt in one of the labeled locations on header J5. Make additional pin-strap settings by  removing  the  jumper  from  J5  and  placing  a  leaded resistor across J10.

The ADDR0 and ADDR1 resistors are read once when input  power  is  applied  to  the  EV  kit;  the  slave  address cannot be changed through the PMBus interface.

## LED Indicators

The EV kit features two LED indicators, one to show that auxiliary power is present and one to show that the IC's output power is good.

The Pilot Light LED (CR2) illuminates green when the onboard 3.3V auxiliary supply is available. VAUX becomes available  when an input voltage is applied to VIN at J9 or J11.

The PG LED (CR1) illuminates green when the following conditions are met:

- VIN is present
- VAUX is present
- The IC asserts power good (PG pin is open)

## Enable Switch

The EV kit includes a switch (SW1) to control the IC's EN input. This switch has two labeled positions:

- ON: EN pin (EN\_BUS) is pulled high  by  the  threestated debounce circuit
- OFF: EN pin (EN\_BUS) is driven low by the debounce circuit

## HSSP-NORMAL Switch

The EV kit's HSSP-NORMAL switch (SW12) must be set to the NORMAL position for proper operation.

## SMB Connectors

The  EV  kit  includes  easy-to-use  SMB  connectors  for precision monitoring of the  output  voltage  (VOUT) at  CJ2,  and  the  switch  node  (LX)  at  CJ3.  These connectors are  back terminated with 50Ω resistance and can be connected directly to oscilloscope inputs for lownoise measurement.

Note: The  LX  signal  passes  through  a  20:1  resistive divider to prevent noise propagation from the switch node and to protect the scope inputs from high voltage. Be sure to adjust the oscilloscope probe setup to account for this attenuation of the LX signal.

## MAX15301 Evaluation Kit

An  additional  SMB  input  connector  is  provided  for  the SYNC pin at CJ1, allowing an external clock source to be supplied to the IC.

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

Figure 2 provides an example of one MAX15301 and two MAX15301 EV kits connected together.

## Evaluates: MAX15301AA02

Figure 2. Multiple EV Kits Connected Together

<!-- image -->

│

## Performance Characteristics

Figure 3. Efficiency vs. Load

<!-- image -->

Figure 4. Efficiency vs. Load

<!-- image -->

Figure 5. I OUT vs. Read\_IOUT

<!-- image -->

## Performance Characteristics (continued)

Figure 6. Internal Temprature Read vs. Internal Temprature

<!-- image -->

Figure 7. External Temprature Read vs. External Temprature

<!-- image -->

Figure 8. Load Transient

<!-- image -->

│

## Performance Characteristics (continued)

Figure 9. Output-Voltage Ripple

<!-- image -->

Figure 10. Startup Waveform

<!-- image -->

Figure 11. Shutdown Waveform

<!-- image -->

## Performance Characteristics (continued)

Figure 12. Startup with Autotune

<!-- image -->

## Component List

Refer to file '15301EVKITHP#BOMRevF.xlsx' attached to this data sheet for component information.

Figure 13. Quantization Noise with V OUT  = 1.2V

<!-- image -->

Figure 14. Quantization Noise with V OUT  = 3.3V

<!-- image -->

│

Figure 15a. MAX15301 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

Figure 15b. MAX15301 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

│

Figure 15c. MAX15301 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

│

## Evaluates: MAX15301AA02

Figure 16. MAX15301 EV Kit Component Placement Guide-First Layer Assembly (Top View)

<!-- image -->

│

Figure 17. MAX15301 EV Kit PCB Layout-First Layer (Top View)

<!-- image -->

│

Figure 18. MAX15301 EV Kit PCB Layout-Layer 2 (Top View)

<!-- image -->

│

Figure 19. MAX15301 EV Kit PCB Layout-Layer 3 (Top View)

<!-- image -->

Figure 20. MAX15301 EV Kit PCB Layout-Layer 4 (Top View)

<!-- image -->

Figure 21. MAX15301 EV Kit PCB Layout-Layer 5 (Top View)

<!-- image -->

Figure 22. MAX15301 EV Kit PCB Layout-Bottom Layer (Top View)

<!-- image -->

│

Figure 23. MAX15301 EV Kit Component Placement Guide-Bottom Assembly (Bottom View)

<!-- image -->

## Ordering Information

| PART             | TYPE                                    |
|------------------|-----------------------------------------|
| MAX15301EVKITHP# | EV Kit                                  |
| MAXPOWERTOOL002# | PowerTool USB-to-PMBus Interface Dongle |

# Denotes RoHS compliant.

## MAX15301 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/14           | Initial release                                                                      | -               |
|                 1 | 1/15            | Changed the U1 component listed in attached rev F BOM from MAX15301 to MAX15301AA002 | 8               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX15301AA02