<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

## General Description

The MAX14566E evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX14566E  USB  device  that combines  a  Hi-Speed  USB  analog  switch  with  a  USB adapter emulator. The Hi-Speed USB transmission lines (D+/D-) have 90 I differential impedance traces to meet Hi-Speed USB specifications.

The  EV  kit  comes  with  the  MAX14566EETA+  installed, but can also be used to evaluate the MAX14566AE and MAX14566BE with IC replacement of U1.

| DESIGNATION        |   QTY | DESCRIPTION                                                               |
|--------------------|-------|---------------------------------------------------------------------------|
| C1, C2, C4         |     3 | 1 F F Q 10%, 35V X7R ceramic capacitors (0805) Taiyo Yuden GMK212B7105K   |
| C3, C5             |     2 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J105k        |
| C6, C7, C8         |     3 | 47 F F Q 20%,16V tantalum capacitors AVX TAJC476K016RNJ                   |
| C9                 |     1 | 0.1 F F Q 10%, 50V X5R ceramic capacitor (0603) TDK C1608X5R1H104K        |
| CEN , U3_OUT, VHC  |     3 | Red test points                                                           |
| D1                 |     1 | 6V, 200mW zener diode (SOT323) Diodes Inc. MMBZ5233BW-7-F (Top Mark: KE3) |
| D2, D3, D4, D6     |     4 | Green LEDs (0603)                                                         |
| D5                 |     1 | Red LED (0603)                                                            |
| GND                |     1 | Black test point                                                          |
| J1                 |     1 | USB type-A right-angle female receptacle                                  |
| J2                 |     1 | USB type-B right-angle female receptacle                                  |
| JU1, JU2, JU5, JU7 |     4 | 2-pin headers                                                             |
| JU3, JU4, JU6, JU8 |     4 | 3-pin headers                                                             |

<!-- image -->

- S Hi-Speed USB (480Mbps)
- S 90 I Differential Traces for USB 2.0
- S USB Powered or Externally Powered for Higher Charging Currents
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                     |
|--------------------------|-------|---------------------------------------------------------------------------------|
| Q1                       |     1 | 50V, 100mA npn transistor (3 SOT23)                                             |
| R1, R3, R4, R7, R12, R16 |     6 | 330 I Q 5% resistors (0805)                                                     |
| R2                       |     0 | Not installed, resistor (0603)                                                  |
| R5, R13                  |     2 | 0 I Q 5% resistors (0805)                                                       |
| R6                       |     1 | 4.7k I Q 5% resistor (0603)                                                     |
| R8                       |     1 | 1k I Q 5% resistor (0603)                                                       |
| R9                       |     0 | Not installed, resistor (0805)                                                  |
| R10, R11                 |     2 | 10k I Q 5% resistors (0603)                                                     |
| R14                      |     1 | 93.1k I Q 1% resistor (0603)                                                    |
| R15                      |     1 | 100k I Q 5% resistor (0603)                                                     |
| U1                       |     1 | USB adapter emulator (8 TDFN-EP) Maxim MAX14566EETA+ (Top Mark: ADJ)            |
| U2                       |     1 | Noninverting buffer driver (6 SC70) Fairchild Semi NC7WZ07P6X (Top Mark: Z07)   |
| U3                       |     1 | Adjustable current-limit switch (8 TDFN-EP) Maxim MAX14523AATA+ (Top Mark: BLO) |
| -                        |     1 | High-speed USB A-to-B cable                                                     |
| -                        |     8 | Shunts (JU1-JU8)                                                                |
| -                        |     1 | PCB: MAX14566E EVALUATION KIT                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| AVX Corporation         | 843-946-0238 | www.avxcorp.com       |
| Diodes Incorporated     | 805-446-4800 | www.diodes.com        |
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| Taiyo Yuden             | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX14566E when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX14566E EV kit (USB cable included)
- 5V, 2A DC power supply
- User-supplied PC with a spare Hi-Speed USB port
- USB 2.0 Hi-Speed/full-speed peripheral device (e.g., USB 2.0 flash drive)
- Mobile device (e.g., iPhone M , iPod M , MP3 player, etc.)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  all  jumpers  (JU1-JU7) are configured for pass-through mode (see Table 5).
- 2)  Connect the USB cable from the PC to the USB typeB port (J2) on the EV kit.
- 3)  Verify that LEDs D2, D4, and D6 are on.
- 4)  Connect  a  USB  2.0  device  to  the  USB  type-A connector (J1).
- 5)  Verify that the USB 2.0 device is detected by the PC.
- 6)  Remove the shunt at jumper JU1. Verify that LED D2 turns off and the USB device is no longer detected.
- 7)  Reinstall the shunt at jumper JU1. Verify that LED D2 turns on and the USB 2.0 device is detected by the PC.
- 8)  The EV kit is now ready for further testing.

## Detailed Description of Hardware

The  MAX14566E  EV  kit  provides  a  proven  layout  to evaluate  the  MAX14566E  family  of  USB  devices  that combines  a  Hi-Speed  USB  analog  switch  with  a  USB adapter  emulator.  The  EV  kit  provides  type-A  (J1)  and type-B  (J2)  USB  ports  for  data  routing  and  peripheral charging. The EV kit requires an active USB port or an external 5V, 2A DC supply for operation.

The device's autodetection mode automatically identifies the type of portable device connected using its charger identification circuit. Requiring no external software, the

iPhone and iPod are registered  trademarks of Apple, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

device  allows  a  host  USB  port  to  support  USB  Battery Charging  Specification,  Revision  1.2-compliant  devices with shorted D+/D- detection, as well as Apple chargers using internal resistor-dividers for biasing data lines for Apple-compliant  devices.  The  device  also  features  a high-performance,  Hi-Speed  USB  switch  with  low  4pF (typ)  on-capacitance  and  low  4 I (typ)  on-resistance used in the pass-through mode.

Jumper JU1 configures the EV kit circuit for USB passthrough  mode  or  autodetection  mode.  In  pass-through mode, data signals are routed between USB port J2 to USB port J1 using 90 I differential controlled-impedance traces,  and  status  indicator  LED  D2  is  on.  In  autodetection mode, the device's DP and DM pins are set for dedicated charging of the device connected at J1, and status indicator LED D2 is off. The EV kit circuit utilizes several jumpers for proper operation when evaluating the EV kit in pass-through mode or autodetection mode. See the Pass-Through  Mode and Autodetection  Mode sections for additional information.

The  EV  kit  circuit  utilizes  the  MAX14566E  (U1)  activelow CEN (or  the  MAX14566AE active-high CEN) output and  the  MAX14523A  (U3)  autoretry  current-limit  switch for  current-limit  protection  and  resetting  the  peripheral  device  connected  at  port  J1.  The  switch  currentlimit  threshold  is  set  to  1.5A,  providing  larger  charging currents  when  operating  the  EV  kit  using  an  external supply. The current-limit threshold can be reconfigured by replacing resistor R14. Status LED indicators D3 and D5 provide the status of U3's ON and FLAG input  and output,  respectively.  Installed  capacitors  C6,  C7,  and C8 are available at port J1 and are used to simulate a true  USB  host  output  capacitance  when  operating  the current-limit  switch  using  an  external  supply  at  the  VIN and GND PCB pads. Status indicator LED D6 turns on when valid bus power is available at port J1.

The EV kit can also be used to evaluate the MAX14566AE and  MAX14566BE  devices.  See  the Evaluating  the MAX14566BE section for additional information for configuring the EV kit for pass-through mode  or autodetection mode when evaluating the MAX14566BE.

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

## Power-Supply Configuration

The  EV  kit  circuit  derives  its  power  from  USB  port  J2 (VBUS) or an external 5V supply applied at the VIN and GND PCB pads. VBUS or VIN sets the EV kit VHC powerrail voltage using jumper JU3. VHC is the power source for the MAX14566E/MAX14566AE/MAX14566BE and the noninverting buffer driver (U2). LED D4 turns on and is brightly lit when the VHC power plane is above 3.3V. See Table 1 for proper JU3 configuration.

Jumpers JU4 and JU6 set the 5V bus power for port J1 using VBUS, VIN, or U3\_OUT. LED D6 is on when a valid bus voltage is applied at port J1. In pass-through mode, the EV kit circuit uses port J2 bus voltage as the power source.  In  autodetection  mode,  the  EV  kit  can  use  an external 4.75V to 5.25V power supply connected at VIN for  higher  charging  current,  if  required  for  the  device connected at J1. See Table 2 for proper JU4 and JU6 configuration.

## VCC Power (JU2)

Jumper JU2 is available for monitoring the MAX14566E/ MAX14566AE/MAX14566BE  VCC  input  current.  Install a shunt at JU2 for normal operation. Remove the shunt at JU2 and place an ammeter in series with the jumper pins to monitor the device supply current. See Table 3 for proper JU2 configuration.

## Modes of Operation (MAX14566E/MAX14566AE)

Jumper JU1 configures the EV kit circuit for USB passthrough  or  autodetection  mode  by  setting  the  proper logic level at the device's CB pin. In pass-through mode,

## Table 1. VHC Power-Plane Configuration (JU3)

| SHUNT POSITION   | VHC POWER PLANE SET BY   |
|------------------|--------------------------|
| 1-2              | VBUS                     |
| 2-3              | VIN                      |

## Table 2. Power Supply Configuration (JU4, JU6)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                                                    |
|----------|------------------|------------------------------------------------------------------------------------|
| JU4      | 1-2              | VBUS power source for U3 input.                                                    |
| JU4      | 2-3              | VIN power source for U3 input.                                                     |
| JU6      | 1-2              | U3_OUT power source for port J1.                                                   |
| JU6      | 2-3              | Port J1 power source dependent on JU4 setting. Current-limit switch (U3) bypassed. |

<!-- image -->

LED D2 is on. In autodetection mode, LED D2 is off. The EV kit requires several jumper reconfigurations for USB pass-through and autodetection modes. See Table 4 for proper JU1 configuration.

See the Evaluating the  MAX14566BE section for configuring the EV kit mode of operation when evaluating the MAX14566BE.

## Pass-Through Mode

In  pass-through  mode,  the  device's  positive  data  lines (TDP, DP) are shorted together and the negative data lines (TDM, DM) are shorted together, allowing the routing of data signals from port J2 to port J1. See Table 5 for proper jumper configuration for pass-through mode operation.

## Autodetection Mode

The  devices  feature  autodetection  mode  for  dedicated chargers and a USB host.

In  autodetection  mode,  the  devices  monitor  the  voltages  at  DM  and  DP  to  determine  the  type  of  device attached.  If  DM R 2.3V  (typ)  and  DP P 2.3V  (typ),  the voltage  stays  unchanged.  If  DM  &lt;  2.3V  (typ),  the device's internal switch disconnects DM and DP from the resistor-divider and DP and DM are shorted together for dedicated charging mode. If DP &gt; 2.3V (typ), the internal switch disconnects DM and DP from the resistor-divider and  DP  and  DM  are  shorted  together  for  dedicated charging mode. Once the charging voltage is removed, the short between DP and DM is disconnected for normal operation.

To configure the EV kit for autodetection mode, see Table 6.

## Table 3. VCC Configuration (JU2)

| SHUNT POSITION   | EV KIT FUNCTION                                                       |
|------------------|-----------------------------------------------------------------------|
| Installed        | Power applied at VCC input.                                           |
| Not installed    | VCC input current monitoring. Ammeter in series with jumper pins 1-2. |

## Table 4. EV Kit Operating Modes (JU1)

| SHUNT POSITION   | CB PIN                                       | LED D2 STATUS   | EV KIT OPERATION                                             |
|------------------|----------------------------------------------|-----------------|--------------------------------------------------------------|
| Installed        | Connected to VHC supply through resistor R5. | On              | Pass-through mode. The USB data transfers between J2 and J1. |
| Not installed    | Connected to ground through resistor R6.     | Off             | Autodetection mode. Peripheral device charging at J1.        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

Table 5. Shunt Configuration for Pass-Through Mode (JU1-JU7)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                                                                         |
|----------|------------------|---------------------------------------------------------------------------------------------------------|
| JU1      | Installed        | Pass-through mode.                                                                                      |
| JU2      | Installed        | Power applied at the VCC input.                                                                         |
| JU3      | 1-2              | VHC power plane set by VBUS.                                                                            |
| JU4      | 1-2              | VBUS input power source for U3.                                                                         |
| JU5      | Not installed    | Reset function for the MAX14566BE. Shunt should remain uninstalled for MAX14566E/MAX14566AE evaluation. |
| JU6      | 1-2              | U3_OUT power source for port J1.                                                                        |
| JU7      | Not installed    | Capacitance load disconnected from port J1.                                                             |

Table 6. Shunt Configuration for Autodetection Mode (JU1-JU7)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                                                                     |
|----------|------------------|-----------------------------------------------------------------------------------------------------|
| JU1      | Not Installed    | Autodetection mode.                                                                                 |
| JU2      | Installed        | Power applied at the VCC input.                                                                     |
| JU3      | 1-2              | VHC power plane set by VBUS.                                                                        |
| JU4      | 2-3              | VIN input power source for U3.                                                                      |
| JU5      | Not Installed    | Reset function for MAX14566BE. Shunt should remain uninstalled for MAX14566E/MAX14566AE evaluation. |
| JU6      | 1-2              | U3_OUT power source for port J1.                                                                    |
| JU7      | Installed        | Capacitance load connected to port J1.                                                              |

Jumper  JU4  configures  the  EV  kit  for  higher  charging currents when using an external supply at the VIN and GND  PCB  pads.  The  EV  kit  maximum  charging  current is limited to 1.5A using the U3 current-limit switch. To  reconfigure  the  EV  kit  to  a  lower  charging  current, replace resistor R14 and use the following equation:

<!-- formula-not-decoded -->

where  ILIM  is  the  desired  current-limit  threshold  in  mA and R14 is in k I .

Enable  the  power  supply  connected  at  VIN.  Connect a mobile device with a half-charged battery to the port J1  type-A  connector.  Read  the  value  of  the  current sourced by the VIN power supply and compare it to the device charging specification. An unsuccessful charging recognition shows a current between 100mA and 200mA for a brief time interval.

Note: The  EV  kit  works  in  autodetection  mode  when using  VBUS  as  the  sole  power  source.  Most  PCs supply  more  than  500mA;  however,  VBUS  may  be current  limited  to  500mA  due  to  the  USB  current-limit specifications.  When  operating  the  EV  kit  using  VBUS, verify that a shunt is not installed at jumper JU7 (capacitors C6, C7, and C8 disconnected from port J1).

<!-- image -->

## Automatic Peripheral Reset (MAX14566E/MAX14566AE)

In addition to configuring the EV kit for pass-through or autodetection mode, jumper JU1 is also used for resetting  the  peripheral  device  connected  at  port  J1.  To perform a peripheral reset, remove and then reinstall the shunt at JU1 (or vice versa).

During  a  reset  condition,  the  MAX14566E's  active-low CEN output  pulses  high  for  1s.  Transistor  Q1  turns  on, pulling  the  U3  ON  pin  low,  resulting  in  the  momentary turn on of LED D3 and disconnection of the bus power at port J1 for the 1s period.

For the MAX14566AE, remove Q1 and install a 0 I resistor at the 0805 PCB pad R9. During a reset condition, the MAX14566AE active-high CEN output pulses low for 1s. The U3 ON pin is pulled low, resulting in the momentary turn on of LED D3 and disconnection of the bus power at port J1 for the 1s period.

## Evaluating the MAX14566BE

The  MAX14566BE  can  be  evaluated  by  replacing  U1 with  the  MAX14566BE.  The  MAX14566BE  has  two digital inputs (CB and CB1) to configure the EV kit circuit for  pass-through  mode,  autodetection  mode,  or  forced dedicated-charge  mode.  In  forced  dedicated-charge mode, DP and DM are always shorted.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

The EV kit requires a slight modification when evaluating the MAX14566BE device. To evaluate the MAX14566BE, perform the following:

- Remove transistor Q1 or resistor R9
- Install a 0 I 0603 resistor at R2

Jumpers  JU1  and  JU8  configure  the  EV  kit  for  passthrough,  autodetection,  or  forced  dedicated-charge mode. See Table 7 for proper JU1 and JU8 configuration.

## Automatic Peripheral Reset (MAX14566BE)

Jumper  JU5  is  available  for  resetting  the  peripheral device connected at port J1 by disabling the current-limit switch  and  disconnecting  the  bus  power  from  port  J1. Install a shunt at JU5 and then remove the shunt at JU5 to perform a peripheral reset at port J1. LED D3 remains on while the shunt is installed at JU5. See Table 8 for JU5 configuration.

Table 7. MAX14566BE Operating Modes (JU1, JU8)

| SHUNT POSITION   | SHUNT POSITION   | MAX14566BE OPERATING                         |
|------------------|------------------|----------------------------------------------|
| JU1 (CB)         | JU8 (CB1)        |                                              |
| Not installed    | 2-3              | Autodetection mode                           |
| Not installed    | 1-2              | Forced dedicated-charge mode (DP/DM shorted) |
| Installed        | X                | Pass-through mode                            |

X = Don't care.

## Table 8. MAX14566BE Peripheral Reset (JU5)

| SHUNT POSITION   | U3 ON PIN                                                 | LED D3 STATUS   | EV KIT OPERATION                       |
|------------------|-----------------------------------------------------------|-----------------|----------------------------------------|
| Installed        | Connected to ground through resistor R10.                 | On              | Reset condition: J1 bus power removed. |
| Not installed    | Connected to VBUS or VIN through series resistors R8/R10. | Off             | Power applied at J1.                   |

## Table 9. Jumper Descriptions (JU1-JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                              |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Installed*       | Pass-through mode. USB data transfer between J2 and J1.                                                                                  |
| JU1      | Not installed    | Autodetection mode. Peripheral device charging at J1.                                                                                    |
| JU2      | Installed*       | Power applied at the VCC input.                                                                                                          |
| JU2      | Not installed    | VCC input current monitoring. Ammeter in series with jumper pins 1-2.                                                                    |
| JU3      | 1-2*             | VHC power plane set by VBUS.                                                                                                             |
| JU3      | 2-3              | VHC power plane set by VIN.                                                                                                              |
| JU4      | 1-2*             | VBUS input power source for U3.                                                                                                          |
| JU4      | 2-3              | VIN input power source for U3.                                                                                                           |
| JU5      | Installed        | MAX14566BE evaluation (reset condition): J1 bus power removed.                                                                           |
| JU5      | Not installed*   | MAX14566BE evaluation: Power applied at port J1. Note: The shunt should remain uninstalled when evaluating the MAX14566E and MAX14566AE. |
| JU6      | 1-2*             | U3_OUT power source for port J1.                                                                                                         |
| JU6      | 2-3              | Port J1 power source dependent on jumper JU4 setting. Current-limit switch (U3) bypassed.                                                |
| JU7      | Installed        | Capacitance load connected to port J1.                                                                                                   |
| JU7      | Not installed*   | Capacitance load disconnected from port J1.                                                                                              |
| JU8      | 1-2*             | MAX14566BE evaluation. Sets the MAX14566BE operating modes with jumper JU1 (see Table 7).                                                |
| JU8      | 2-3              | MAX14566BE evaluation. Sets the MAX14566BE operating modes with jumper JU1 (see Table 7).                                                |

* Default position.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

<!-- image -->

Figure 1. MAX14566E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

<!-- image -->

Figure 2. MAX14566E EV Kit Component Placement GuideComponent Side

Figure 3. MAX14566E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14566E EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

Figure 5. MAX14566E EV Kit PCB Layout-PWR Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX14566E EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14566EEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14566E Evaluation Kit

## Evaluates: MAX14566AE/MAX14566BE/MAX14566E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.