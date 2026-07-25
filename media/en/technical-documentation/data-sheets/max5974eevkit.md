<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The  MAX5974E  evaluation  kit  (EV  kit)  is  a  fully  assembled  and  tested  surface-mount  circuit  board  featuring the  MAX5974E  spread-spectrum,  current-mode  PWM controller  for  Power-over-Ethernet  (PoE)  powered  device (PD)  applications.  The  EV  kit  circuit  is  a  nonisolated, compact,  and  low-cost  design  used  in  Power-over-LAN (PoLAN) applications requiring DC power from an Ethernet network port for PDs such as IP phones, wireless access nodes, and security cameras.

The EV kit features a Class 2 PD with a 200kHz switching frequency  flyback  DC-DC  converter  using  the  IC.  The circuit  achieves  high  efficiency  up  to  91%  using  a synchronous  rectifier.  The  surface-mount  transformer provides energy storage for the output, which is configured for +3.3V and provides up to 1.8A load current.

The  EV  kit  includes  the  MAX5969B  IEEE M 802.3af/ at-compliant  PD  interface-controller  IC  that  provides PD  detection  signature,  PD  classification  signature, inrush current control, undervoltage lockout (UVLO), and current limit after the PD is on.

The EV kit circuit receives its power from IEEE 802.3af/ at-compliant power-sourcing equipment (PSE). The PSE provides  the  required  -39V  to  -57V  DC  power  over  a twisted-pair Ethernet network cable to the EV kit's RJ45 MagJack M . The EV kit features a 1 x 1Gb RJ45 MagJack and two full-bridge diodes for separating the DC power provided by an endspan or midspan Ethernet system.

The  EV  kit  circuit  can  also  be  powered  by  a  +39V  to +57V wall-adapter power source applied at the WAD\_IN and WAD\_GND PCB pads. When a wall-adapter power source is detected, it always takes precedence over the PSE source, allowing the wall adapter to power the EV kit.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

IEEE is a registered service mark of the Institute of

Electrical and Electronics Engineers, Inc.

MagJack is a registered trademark of Bel Fuse Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5974E Evaluation Kit

## Evaluates: MAX5974E

## Features

- S IEEE 802.3af/at-Compliant PD Interface Circuit
- S -39V to -57V Startup Input Voltage Range
- S 91% Efficiency (at VIN = +48V)
- S Nonisolated +3.3V Output at 1.8A
- S PD Detection and Configurable Classification Signatures
- S 2-Event Classification and Wall-Adapter Detect Output
- S Inrush Current Limit of 180mA (max)
- S Internal UVLO at -38.6V
- S Evaluates Endspan and Midspan Ethernet Systems
- S Simplified Wall-Adapter Interface
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

1

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1            |     0 | Not installed, ceramic capacitor (0805)                                       |
| C2, C18       |     2 | 0.1µF Q 10%, 100V X7R ceramic capacitors (0805) TDK C2012X7R2A104K            |
| C3, C12       |     2 | 0.1µF Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104k          |
| C4            |     1 | 10µF Q 10%, 25V X7R ceramic capacitor (1206) Murata GRM31CR61E106K            |
| C5            |     1 | 10µF Q 20%, 16V X5R ceramic capacitor (0603) Murata GRM188R60J106M            |
| C6, C13       |     2 | 1µF Q 10%, 100V X7R ceramic capacitors (1206) TDK C3216X7R2A105K              |
| C7            |     1 | 22µF Q 20%, 63V electrolytic capacitor (6.6mm x 6.6mm) Panasonic EEEFK1J220XP |
| C8            |     1 | 1000pF Q 10%, 1500V X7R ceramic capacitor (1808) AVX 1808SC102KAT1A           |
| C9            |     1 | 330pF Q 20%, 50V X7R ceramic capacitor (0603) Murata GRM188R72A331M           |
| C10, C11      |     2 | 100µF Q 20%, 6.3V X5R ceramic capacitors (1210) Murata GRM32ER60J0J107M       |
| C14           |     1 | 0.01µF Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E103K          |
| C15           |     1 | 0.047µF, 10V X7R ceramic capacitor (0603) AVX 0603ZG473ZAT2A                  |
| C16           |     1 | 100pF, 25V X7R ceramic capacitor (0603) AVX 06033C102MAT2A                    |
| C17           |     1 | 0.1µF, 25V X5R ceramic capacitor (0603) Murata GRM188R61E104K                 |
| C19           |     1 | 1000pF, 25V X5R ceramic capacitor (0603) Murata GRM188R61H102K                |

<!-- image -->

## MAX5974E Evaluation Kit

## Evaluates: MAX5974E

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C20, C22      |     2 | 2200pF, 100V X5R ceramic capacitors (0603) Murata GRM188R72A222K           |
| C21           |     1 | 0.22µF, 25V X5R ceramic capacitor (0603) Murata GRM188R61E224KA88B         |
| C23           |     0 | Not installed, ceramic capacitor (0603)                                    |
| D1, D2        |     2 | 100V, 0.8A bridge rectifiers (MiniDIP) Diodes Inc. HD01-T                  |
| D3            |     1 | Transient voltage suppressor (SMB) Diodes Inc. SMBJ58A-13-F (Top Mark: NG) |
| D4            |     1 | 60V, 500mA Schottky diode (SOD123)                                         |
| D6            |     0 | Not installed, TVS diode (SMA)                                             |
| D7            |     0 | Not installed, diode (SMA)                                                 |
| D8            |     1 | 100V, 2A Schottky diode (SMB) Diodes Inc. ES2B-13-F                        |
| D10           |     1 | 80V, 100mA switching diode (SOD323) Diodes Inc. 1N4148WS                   |
| D11           |     0 | Not installed, zener diode (SOT23)                                         |
| J1            |     1 | Modular 8-position, side-entry jack assembly                               |
| L1            |     1 | 80V, 2A common-mode choke TDK ZJYS81R5-2P24 or Sumida CPFC74NP-4251-T11    |
| L2            |     1 | 3.3µH, 2.6A inductor Cooper Bussmann SD53-3R3-R                            |
| L3            |     1 | 50V, 2A common-mode choke TDK ZJYS51R5-2P-01 or Sumida CPFC74NP-PS02H2A20  |
| N1            |     1 | 30V, 5.3A n-channel MOSFET (SOT23), International Rectifier IRLML0030TRPbF |
| N2            |     1 | 150V, 1.6 A, 261m I n-channel MOSFET (3 SuperSOT) Fairchild FDN86246       |
| Q1            |     0 | Not installed, npn transistor (SOT23)                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                       |   QTY | DESCRIPTION                           |
|-----------------------------------|-------|---------------------------------------|
| Q2                                |     0 | Not installed, pnp transistor (SOT23) |
| R1                                |     1 | 24.9k I Q 1% resistor (0603)          |
| R2 , R19                          |     2 | 10 I Q 5% resistors (0603)            |
| R3                                |     1 | 49.9 I Q 1% resistor (0603)           |
| R4                                |     1 | 66.5 I Q 1% resistor (0805)           |
| R5                                |     1 | 59k I Q 1% resistor (0603)            |
| R6                                |     1 | 22.1k I Q 1% resistor (0603)          |
| R7                                |     1 | 34k I Q 1% resistor (0603)            |
| R8                                |     1 | 1.5M I Q 1% resistor (0603)           |
| R9, R13, R27                      |     3 | 100k I Q 1% resistors (0603)          |
| R10                               |     1 | 1k I Q 1% resistor (0603)             |
| R11, R12, R34, R37, R38, R41, R42 |     0 | Not installed, resistors (0603)       |
| R14                               |     1 | 100 I Q 1% resistor (0603)            |
| R15                               |     1 | 43.2k I Q 1% resistor (0603)          |
| R16, R46                          |     2 | 0 I Q 5% resistors (0603)             |
| R17                               |     1 | 1M I Q 5% resistor (0603)             |
| R18                               |     1 | 4.02k I Q 1% resistor (0603)          |
| R20, R23, R24, R40                |     0 | Not installed, resistors (0805)       |
| R21                               |     1 | 0.43 I Q 1%, 1/4W resistor (1206)     |
| R22                               |     1 | 10 I Q 5% resistor (0805)             |
| R25                               |     0 | Not installed, resistor (1206)        |

## MAX5974E Evaluation Kit

## Evaluates: MAX5974E

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| R26           |     1 | 499 I Q 5% resistor (0603)                                                         |
| R28           |     1 | 49.9k I Q 1% resistor (0603)                                                       |
| R30-R33       |     4 | 75 I Q 5% resistors (0805)                                                         |
| R35           |     1 | 4.12k I Q 1% resistor (0603)                                                       |
| R36           |     1 | 2.43k I Q 1% resistor (0603)                                                       |
| R39           |     1 | 10 I Q 1% resistor (0603)                                                          |
| RJ45          |     1 | RJ45 MagJack 1G Ethernet, 802.3af/at standard Bel Fuse Inc. 0826-1X1T-GH-F         |
| T1            |     1 | 7.5W flyback transformer (8 EP10) Sumida CEP1110-PS10-200 or Coilcraft P0E70P-50L_ |
| TP1           |     1 | Small red test point                                                               |
| TP2           |     1 | Small black test point                                                             |
| U1            |     1 | Current-mode PWM controller (16 TQFN-EP) Maxim MAX5974EETE+                        |
| U2            |     1 | IEEE 802.3af/at-compliant PD interface (10 TDFN-EP) Maxim MAX5969BETB+             |
| -             |     4 | Rubber bumpers                                                                     |
| -             |     1 | PCB: MAX5974E EVALUATION KIT                                                       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avx.com                 |
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Cooper Bussmann                        | 916-941-1117 | www.cooperet.com            |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp                         | 800-344-2112 | www.panasonic.com           |
| Sumida                                 | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX5974E when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX5974E EV kit
- IEEE  802.3af/at-compliant  PSE  and  Category  5e Ethernet network cable
- -48V, 1A-capable DC power supply
- Voltmeter

## Quick Start

## Required Equipment

## Hardware Connections

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Use one of the following methods to power the EV kit:
- If  network  connectivity  is  required: Connect  a Category 5e Ethernet network cable from the EV kit  input  port  RJ45  MagJack connector (RJ45) to the corresponding PSE Ethernet LAN connection, which  provides  power  to  the  EV  kit.  A  modular RJ45  jack  (J1)  provides  an  interface  with  the Ethernet data signals only.
- If network connectivity is not required: Connect a -48V DC power supply between the V+ and VPCB pads on the EV kit. Connect the power-supply positive  terminal  to  the  V+  pad  and  the  negative terminal to the V- pad.
- 2)  Activate the PSE power supply or turn on the external DC power supply.
- 3)  Using  the  voltmeter,  verify  that  the  EV  kit  provides +3.3V across the 3.3V and RTN PCB pads.

## Detailed Description of Hardware

The  MAX5974E EV kit  is  a  fully  assembled  and  tested surface-mount circuit board that evaluates the MAX5974E nonisolated, synchronous, current-mode PWM controller. The EV kit features a powered Ethernet port, a data-only Ethernet port, and a MAX5969B IEEE 802.3af/at-compliant network PD interface-controller IC.

The  EV  kit  is  a  nonisolated  7W  DC-DC  current-mode PWM controller using a flyback DC-DC converter topology. The  EV  kit  receives  power  from  an  IEEE  802.3af/atcompliant PSE and a Category 5 cable connected to the EV kit's RJ45 MagJack. The EV kit uses a 1 x 1Gb RJ45 MagJack and two diode-bridge power rectifiers (D1, D2) to  separate  the  -57V  DC  power  sent  by  the  PSE.  The EV kit accepts power from an endspan or midspan PSE network configuration. The EV kit also provides an RJ45 jack (J1) for interfacing to the Ethernet data signals. PCB pads  V+  and  V-  are  available  for  powering  the  EV  kit

<!-- image -->

## MAX5974E Evaluation Kit Evaluates: MAX5974E

if  network  connectivity  is  not  required.  Common-mode chokes L1 and L3 are provided for EMI filtering  at  the EV kit power-supply (V+, V-) and wall-adapter (WAD\_IN, WAD\_GND) inputs, respectively.

The  EV  kit  output  voltage  is  configured  for  +3.3V  and provides  up  to  1.8A  output  current  while  achieving  up to  91%  efficiency.  Transformer  T1  is  used  for  providing the operating voltage at the IC's IN input. PCB pad D11 is available for clamping the IN input when driving the  EN  input  using  an  external  source.  Secondary-side regulation  is  achieved  through  feedback  resistors  R3, R35,  and  R36  to  set  the  output  voltage,  in  addition  to filtering components C21 and R14. Current-sense resistors  R21  and  R25  limit  the  peak  current  through transistor  N2  and  primary  winding  of  transformer  T1. Optional diodes D6 and D7 PCB footprints are provided for limiting the voltage spikes across T1 during N2 turnoff time, if required.

The  EV  kit  also  demonstrates  the  full  PD  functionality of  the  device,  such  as  PD  detection  signature,  PD classification signature, inrush current control, and UVLO. Resistors R1 and R4 set the PD detection signature and the PD classification signature, respectively.

The  EV  kit  circuit  accepts  power  from  a  wall-adapter DC power source.  When  a  +39V  to  +57V  wall-adapter power source is applied at the WAD\_IN and WAD\_GND PCB  pads,  it  always  takes  precedence  over  the  PSE source,  allowing  the  wall  adapter  to  power  the  EV  kit circuit.  When  applying  a  valid  voltage  source  between the  WAD\_IN  and  WAD\_GND  pads,  the  MAX5969B internal isolation switch disconnects VSS from RTN, which allows the wall adapter to supply power to the EV kit.

## PD Classification Signature

The EV kit is configured for a Class 2 (3.84W to 6.49W) PD  classified  by  resistor  R4.  To  reconfigure  the  PD classification,  replace  surface-mount  0805  resistor  R4. Table 1 lists the PD classification options.

## Table 1. PD Classification Signature Selection

|   CLASS | MAXIMUM POWER USED BY PD (W)   |   RESISTOR R4 ( I ) |
|---------|--------------------------------|---------------------|
|       0 | 0.44 to 12.95                  |                 615 |
|       1 | 0.44 to 3.84                   |                 117 |
|       2 | 3.84 to 6.49                   |                66.5 |
|       3 | 6.49 to 12.95                  |                43.7 |
|       4 | 12.95 to 25.5                  |                30.9 |
|       5 | > 25.5                         |                21.3 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Wall-Adapter Power Source (WAD\_IN, WAD\_GND)

The EV kit can also accepts power from a wall-adapter DC power source applied at the WAD\_IN and WAD\_GND PCB  pads.  The  wall-adapter  power-source  operatingvoltage range must be within -36V to -57V for the EV kit.

When  the  wall-adapter  power  source  is  above  +27.5V (typ), it takes precedence over the PSE source. Once the wall-adapter  power  source  is  detected,  the  MAX5969B internal isolation switch disconnects VSS from RTN. The wall-adapter  power  is  supplied  to  VDD  (through  diode D8)  and  RTN.  Once  it  takes  over,  the  classification process is disabled. Resistors R27 and R28 are available for adjusting the EV kit wall-adapter voltage for disabling the PoE source.

<!-- image -->

## MAX5974E Evaluation Kit Evaluates: MAX5974E

If  the  wall-adapter  power  source  is  below  +27V,  the PoE  provides  power  through  the  device's  RTN  after  a successful detection and classification. Diode D8 prevents  the  PoE  from  back  driving  the  wall-adapter power source.

## Ethernet Data-Signal Interfacing

The EV kit features a modular RJ45 jack (J1) to interface with the Ethernet data signals. J1 is provided for interfacing the EV kit with the Ethernet data signals only. Refer to the RJ45 MagJack data sheet on the Bel Fuse website prior to interfacing the EV kit's J1 modular RJ45 jack with the Ethernet data signals.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5974E Evaluation Kit

## Evaluates: MAX5974E

<!-- image -->

Figure 1. MAX5974E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX5974E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX5974E EV Kit PCB Layout-Component Side

<!-- image -->

## MAX5974E Evaluation Kit

## Evaluates: MAX5974E

Figure 4. MAX5974E EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 5. MAX5974E EV Kit PCB Layout-Signal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX5974E EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX5974E Evaluation Kit

## Evaluates: MAX5974E

Figure 7. MAX5974E EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5974EEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX5974E Evaluation Kit

## Evaluates: MAX5974E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.