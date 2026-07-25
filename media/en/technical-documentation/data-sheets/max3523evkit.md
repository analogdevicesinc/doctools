<!-- lastmod 2022-08-02 -->
## MAX3523 Evaluation Kit

## General Description

The MAX3523 evaluation kit (EV kit) provides the hardware and  software  graphical  user  interface  (GUI)  necessary to  evaluate  the  MAX3523  low-power  DOCSIS  3.1 programmable-gain  amplifier.  The  EV  kit  includes  a MAX3523  installed  EV  board,  as  well  as  a  micro-USB cable to communicate with a PC.

## Features

- Easy Evaluation of the MAX3523
- USB-3-Wire Serial Programmable Interface (SPI)
- PC, Laptop, or Tablet with Windows ®  7 and 10 Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## MAX3523 EV Kit Files

| FILE                                                | DECRIPTION          |
|-----------------------------------------------------|---------------------|
| MAX3523 Programmable Gain Amplifier EV Kit Software | Application program |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX3523

## Quick Start

## Required Equipment

- One power supply capable of supplying at least 1000 mA at +5V.
- One RF signal generator capable of delivering at least -10dBm of output power up to 204 MHz frequency.
- One RF spectrum analyzer capable of covering the operating frequency range of the device.
- One Windows PC with USB jack.
- 50Ω SMA cables, quantity = 2
- (Optional) One network analyzer to measure return loss.
- (Optional) One ammeter to measure supply current.
- MAX3523 EV kit GUI installation package: SetupPGA EvKit\_5.X.XXXXXXXX.0\_Win7.msi.

Ordering Information appears at end of data sheet.

<!-- image -->

## Procedure

## Software / Driver preparation

- 1) EV  Kit  GUI  Installation:  double-click  SetupPGA\_ EvKit\_5.X.XXXXXX.0\_Win7.msi. After successful installation,  DeviceStudio5.exe should be created at desktop.
- 2) USB driver installation: connect EV kit micro-USB port to Windows PC USB port. When first connecting the EV kit, Windows will automatically search/install the

Evaluates: MAX3523

USB driver. It could take few minutes. In the rare case that  Windows fails  to  find  the  driver,  please  contact Maxim support for assistant.

- 3) Check  USB  driver  installation  status:  if  Windows successfully  installs  the  USB  driver,  a  new  device called  'Teensy  USB  Serial'  should  appear  in  the Windows Device Manager (Figure 1).

Figure 1. USB Driver Installation Status

<!-- image -->

│

- 4) Check GUI/EV Kit communication status: Launch DeviceStudio5.exe, and DeviceStudio will automatically search for the connected MAXIM EV kit. After few seconds, MAX3523 should appear in device list (Figure 2).

Figure 2. MX3523 EV Kit GUI, Successful Connection

<!-- image -->

- 5) In rare case DeviceStudio fails to find MAX3523 EV Kit, push the reset button (see Figure 4), hold for 2 seconds, and release. Then click the Scan button at DeviceStudio (see Figure 3).

Figure 3. MX3523 EV Kit GUI, Unsuccessful Connection

<!-- image -->

Figure 4. MAX3523 EV Kit USB Communication

<!-- image -->

## Setup Procedure:

- 1) With its output disabled, set the DC power supply to +5V. If available, set the power supply's current limit to  1000mA.  Connect  the  power  supply  to  the  +5V (through an ammeter if desired) and GND terminals on the EV kit, as shown in Figure 5.
- 2) With its output disabled, set the RF signal generator to  85MHz and a power level of -32.5dBm. Connect the  signal  generator  to  the  SMA  J1  RF  IN  on  the evaluation board, as shown in Figure 5.
- 3) Connect the SMA labeled J2 RFOUT on the evaluation board  to  a  spectrum  analyzer  and  set  spectrum analyzer center frequency to 85MHz.
- 4) Connect the EV kit's micro-USB port to the Windows PC USB port.
- 5) Turn on the +5V power supply.
- 6) If  the  EV  kit  GUI  is  currently  running,  close  it  and relaunch (DeviceStudio5.exe), after few seconds, the MAX3523 should appear in device list.
- 7) Double-click PGA section at DeviceStudio to launch MAX3523 GUI. (Figure 2)
- 8) MAX3523 GUI should be launched, as shown Figure 6. Click 'set Default'
- 9) Toggle  the  TX\_ENABLE  switch  at  MAX3523  GUI. The  MX3523  will  be  powered-up  in  default  mode (GainCode = 63, PC = 3).
- 10) The supply current from the +5V supply should read approximately 700 mA. Be sure to adjust the power supply  to  account  for  any  voltage  drop  across  the power supply cable.
- 11)  Enable the RF signal generator's output.
- 12) Check  the  output  level  on  the  spectrum  analyzer. With  -32.5dbm  at  input,  the  expected  output  power level is about 0 dBm, which implies the EV kit board gain is 32.5dB, correct it by adding 4.5dB (board loss, detailed explanation is below), the MAX3523 voltage gain is 37 (32.5 + 4.5)dB.

│

Figure 5. MAX3523 EV Kit Connection

<!-- image -->

Evaluates: MAX3523

Figure 6. MX3523 EV Kit GUI

<!-- image -->

## Gain Correction factor explanation

Input balun T3 transforms the 50Ω test equipment impedance to 100Ω MAX3523 input impedance, with a voltage gain of 3dB.

Output  minimum  loss  pad  (R5/R6)  transforms  the  75Ω output impedance to 50Ω test equipment impedance, with a voltage 'Gain' of -7.5dB.

```
MAX3523 Voltage Gain = VOUT @ last matching component (C9) - V IN @ MAX3523 In± = (SMAOUT- MLP 'gain') (SMAIN + T3 Gain) = (SMAOUT-SMAIN) - (-7.5) - 3 = EVK Gain + 4.5
```

## Component Suppliers

| SUPPLIER   | WEBSITE                    |
|------------|----------------------------|
| MURATA     | https://www.murata.com/    |
| LAIRD      | https://www.lairdtech.com/ |

Note: Indicate that you are using the MAX3523 when contacting these component suppliers.

Evaluates: MAX3523

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3523EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX3523 EV Kit Bill of Materials

| COMPONENT      | DESCRIPTION                          | VALUE / PART NUMBER   | SUPPLIER   |
|----------------|--------------------------------------|-----------------------|------------|
|                | Components in TYP operation Circuit  |                       |            |
| B1, B2         | FERRITE-BEAD, 600                    | BLM21AG601SN1D        | MURATA     |
| C2, C5, C7     | CAPACITOR; SMT (0603)                | 0.01 uF               |            |
| C4             | CAPACITOR; SMT (0402)                | 2.7 pF                |            |
| C8             | CAPACITOR; SMT (0402)                | 3.9 pF                |            |
| C14            | CAPACITOR; SMT (0402)                | 1000pF                |            |
| L1             | FERRITE-BEAD, 1K                     | MI0805J102R-10        | LAIRD      |
| L2             | INDUCTOR; SMT (0402)                 | 5.1 nH                |            |
| R1, R12        | RESISTOR; SMT (0603)                 | 100 Ohm               |            |
| R3             | RESISTOR; (0402) 1%                  | 6.2 Ohm               |            |
| R7             | RESISTOR; (0603)                     | 95.3 Ohm              |            |
| U2             | DOCSIS 3.1 PGA                       | MAX3523               | MAXIM      |
| T1             | TRANSFORMER, Impedance ratio: 50:75  | 617PT-2290            | MURATA     |
|                | Components used only in this EV kit  |                       |            |
| R8             | Place holder                         | OPEN                  |            |
| C3             | Place holder                         | OPEN                  |            |
| C9             | Place holder                         | OPEN                  |            |
| C1             | CAPACITOR; SMT (0603)                | 0.01UF                |            |
| C6             | CAPACITOR; SMT (0805)                | 10UF                  |            |
| C16, C17       | Place holder                         | OPEN                  |            |
| C18            | Place holder                         | OPEN                  |            |
| J1, J2         | SMA                                  | SMA                   |            |
| JP3, TP3, JP30 | Test Point                           | Red Test Point        |            |
| JP4, TP4, TP5  | Test Point                           | Black Test Point      |            |
| L3, L4         | Place holder,AC coupling Cap         | 0.01uF                |            |
| R2, R4, R13    | RESISTOR; 0402                       | 10K                   |            |
| R5             | RESISTOR; 1206 75-50 MLP             | 43.2                  |            |
| R6             | RESISTOR; 1206 75-50 MLP             | 86.6                  |            |
| R9             | RESISTOR; 0603                       | 0                     |            |
| R10            | RESISTOR; 0402;                      | 20K                   |            |
| R11, R14       | RESISTOR; 0402;                      | 100K                  |            |
| T3             | TRANSFORMER, Impedance ratio: 50:100 | MABA-009250-CT0068    |            |
| TP1, TP2, TP8  | Test Point                           | Yellow Test Point     |            |
| U1             | USB-SPI communication module         | MAX32630FTHR          | MAXIM      |

Evaluates: MAX3523

## MAX3523 EV Kit Schematic

<!-- image -->

## MAX3523 EV Kit PCB Layout Diagrams

MAX3523 EV Kit-Top Silkscreen

<!-- image -->

MAX3523 EV Kit-Top

<!-- image -->

MAX3523 EV Kit-Internal 2

<!-- image -->

│

## MAX3523 EV Kit PCB Layout Diagrams (continued)

MAX3523 EV Kit-Internal 3

<!-- image -->

MAX3523 EV Kit-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and ma[ limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

Evaluates: MAX3523