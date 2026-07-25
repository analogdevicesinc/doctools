<!-- lastmod 2022-08-03 -->
## MAX77301 Evaluation Kit

## General Description

The MAX77301 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX77301 dual-path lithium-ion  (Li+)  battery  charger  with  USB  enumeration and  automatic  adapter-type  detection  features.  The  EV kit is powered from a USB port or dedicated charger with automatic detection of adapter type and USB enumeration capability.

The IC  features  a  Smart  Power  Selector™  feature  that makes  the  best  use  of  limited  USB  or  adapter  power. Battery  charge  current  is  set  independent  of  the  inputcurrent limit. Power not used by the system charges the battery. This  allows  the  appli  cation  to  operate  without  a battery,  discharged  battery,  or  dead  battery.  Automatic input  selection  switches  the  system  between  battery, battery assist, and external power modes.

The  EV  kit  provides  LED  indicators  for  adapter-type detection  ( UOK ),  external  power-on  ( EXT\_PWRON ), charging  status  ( CHG\_STAT ),  external  power-source current  capability  (CHG\_TYPE),  and  interrupts  ( IRQ ). The EV kit also features an NTC thermistor for thermal protection and JEITA-compliant* charging.

The  EV  kit  is  configured  for  full-speed  USB  by  default, but  can  be  configured  for  low-speed  USB  by  removing the crystal oscillator and adjusting jumper default settings (see Table 1).

Smart Power Selector is a trademark of Maxim Integrated Products, Inc.

* U.S. Patent # 6,507,172.

Evaluates: MAX77301/MAX77301A

## Benefits and Features

- Enables Charging from a Micro-B USB Connector
- USB Enumeration without Host-Processor Intervention
- Automatic Detection of Adapter Type or USB Port
- Dual-Speed USB Operation (Full Speed or Low Speed)
- Input Overvoltage Protection to 16V
- Smart Power Selector
- Automatic Current Sharing Between Battery Charging and System
- Operates with Discharged or No Battery
- LED Indicators
- NTC Monitoring of Battery Temperature
- JEITA-Compliant Charging Profile
- Thermal-Charge Regulation Prevents the IC from Overheating

Ordering Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Recommended Equipment

- MAX77301 EV kit test fixture
- USB A-to-USB micro-B cable (supplied with the EV kit)
- User-supplied PC with a spare USB port
- I 2 C  command  module  (CMAXQUSB  or  MINIQUSB) (USB cable included)
- Four  digital  multimeters  with  current-measurement capability (DMM1-DMM4)
- BAT  electronic  load  (constant  voltage  (CV),  able  to sink current) or Li+ battery
- SYS electronic load
- MAX77301 software (GUI)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and under -lined refers to items from the Windows operating system.

## Procedure

The EV kit is a fully assembled and tested surface-mount board. Follow the steps below and Figure 9 to set up and verify the IC and board operation:

- 1) Verify  that  the  jumpers  on  the  EV  kit  are  properly configured, as shown in Table 1.
- 2) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software. Save  the  EV  kit  software  to  a  temporary  folder and  uncompress  the  ZIP  file.  The  CMAXQUSB  or MINIQUSB  firmware  can  also  be  found  at  the

## Table 1. Default Jumper Settings (JU1-JU10)

| JUMPER   | SHUNT POSITION   | FUNCTION                                                     |
|----------|------------------|--------------------------------------------------------------|
| JU1      | PCB short        | Connects XOUT to the Y1 crystal.                             |
| JU2      | PCB short        | Connects XIN to the Y1 crystal.                              |
| JU3      | PCB open         | Connects XOUT to INT_3V3.                                    |
| JU4      | 1-3              | Selects BUS, SYS, or V DD as the LED indicator power source. |
| JU5      | PCB short        | Shorts DGND andAGND together. Do not disconnect.             |
| JU6      | 1-2              | Selects the logic level for ENU_EN_HW .                      |
| JU7      | 1-2              | Selects the logic level for STDB_EN_HW .                     |
| JU8      | 1-2              | Selects the logic level for CEN.                             |
| JU9      | 1-2              | Selects the logic level for IBUS_DEF.                        |
| JU10     | PCB open         | Connects XIN to AGND.                                        |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Evaluates: MAX77301/MAX77301A

same  link.  The  EV  kit  is  compatible  with  both  the CMAXQUSB and MINIQUSB interface boards.

- 3) Install  the  EV  kit  software  and  USB  interface  firm -ware inside the temporary folder on your PC by running the .EXE program.
- 4) Connect the USB cable from the PC to the CMAXQUSB/MINIQUSB  interface  board.  A Building Driver Database window pops up in addition to a New  Hardware  Found message  when  installing the USB driver for the first time. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows ® .
- 5) Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver (default installation  directory)  using  the Browse button.  During device driver installation, Windows may show a warning  message  indicating  that  the  device  driver that Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation. Refer to the USB\_Driver\_Help.PDF document for additional information.
- 6) If using the CMAXQUSB command module, ensure that the shunt on jumper JU1 is in the 3.3V position.
- 7) Carefully connect the boards by aligning the 20-pin connector on the EV kit with the 20-pin header on the CMAXQUSB/MINIQUSB interface board. Gently press them together.

│

## MAX77301 Evaluation Kit

- 8) If simulating a battery, set the BAT electronic load to 3.6V at CV mode and turn off.
- 9) Observe correct polarity. Connect the BAT electronic load/Li+ battery and series digital multimeter (DMM4) in the current-measurement mode, as shown in Figure 9 . Leave the BAT electronic load turned off. If using an Li+ battery, leave the positive terminal unconnected.
- 10) Connect DMM1 across the BAT electronic load/Li+ battery.  Connect  the  positive  terminal  of  DMM1  to the positive terminal of the Li+ battery. Connect the negative terminal of DMM1 to the negative terminal of the Li+ battery.
- 11) Connect DMM2 from INT\_3V3 to BUS\_DGND.
- 12) Connect DMM3 from SYS to SYS\_DGND.
- 13) Preset the SYS electronic load for 100mA and turn off.
- 14) Connect  the  SYS  electronic  load  from  SYS  to SYS\_GND.
- 15) Plug a USB cable from P1 to the PC with a 500mA USB cable.
- 16) Verify  that  the  LED  at  D1  is  on,  indicating  that  a dedicated charger has been detected.
- 17) Start the EV kit software.
- 18) Select the Device menu item in the upper-left corner, then Connect . Wait for the device to respond, and in the Synchronize window, press the Read and Close button.  Normal  device  operation  is  verified  when Connected is displayed in bottom-left corner.

Note: All  default  EV  kit  software  settings  are  used for the remainder of the test procedure.

- 19) Turn on the BAT electronic load or connect the positive terminal of the Li+ battery to V BAT+ .

Note: When using an Li+ battery, if V BAT+  &lt; 2.5V, the  charger  starts  up  in  precharge  mode.  If  V BAT+ ≥  2.5V,  the  charger  starts  up  in  fast-charge  mode. If in precharge mode, verify that DMM4 reads 50mA. If in fast-charge mode, verify that DMM4 reads 200mA.

- 20) Verify that CHG\_STAT (the LED at D4) is on, indicating that charging is occurring.
- 21) Verify  that  the  voltage  read  by  DMM2  is  approximately 3.3V.
- 22) Verify  that  the  voltage  read  by  DMM3 is  (DMM1 + 140mV) or 4.3V, whichever is greater.

## Evaluates: MAX77301/MAX77301A

- 23) Turn on the SYS electronic load and verify that the voltage read by DMM3 is (DMM1 + 140mV) or 4.3V, whichever is greater.
- 24) Disconnect the BAT  electronic load/Li+ battery and  wait  until  DMM1  reads  4.2V,  indicating  a  fully charged battery.
- 25) Verify that the voltage read by DMM3 is the greater of (DMM1 + 140mV) or 4.35V.
- 26) Turn off the SYS electronic load.
- 27) Remove the USB cable from P1.
- 28) Disconnect all test leads from the EV kit.

## Detailed Description of Hardware

The  MAX77301  EV  kit  evaluates  the  MAX77301  integrated  1-cell  Li+  charger  with  USB  enumeration  and adapter-type  detection  capability.  The  EV  kit  negotiates charging current from the USB host or hub, without processor intervention. The IC also automatically detects for a  dedicated  charger,  USB  charger,  or  adapter  and  sets the input-current limit accordingly. The USB input power not used by the system charges the battery.

## USB Interface

An integrated USB peripheral controller provides autoenumeration  for  full-speed  and  low-speed  modes. The USB controller is in charge of:

- Executing adapter-detection sequence: Detects what  type  of  adapter  is  externally  connected  to  the USB receptacle (P1) and sets the input-current  limit accordingly.

If the USB receptacle (P1) is attached to a USB charger (host or hub) or a USB 2.0 (host or hub), it enumerates as an HID device and negotiates the maximum charging current level (from BUS).

The  IC  operates  in  low-speed  mode  using  an  internal 6MHz oscillator and does not require an external crystal to be USB compliant. The IC operates in full-speed mode and requires an external 12MHz crystal (Y1, Figure 9).

According  to  the  USB  2.0  specification,  a  low-speed device  is  not  allowed  to  use  a  standard  USB  type-B connector, which is why the IC is also able to operate in full-speed mode. This makes it possible to use a custom or captive cable for low-speed mode using the IC and still be USB compliant. While operating in full-speed mode, using the IC allows use of a standard USB type-B connector.

## MAX77301 Evaluation Kit

## Adapter Detection

When an adapter is present on the USB receptacle (P1), the IC examines the external device to identify the type of adapter connected. The possible adapter types are:

- Dedicated charger
- USB charger (host or hub)
- USB 2.0 low power (host or hub)
- USB 2.0 high power (host or hub)

Each of these different devices has different current capability, as shown in Table 2.

When an adapter is connected, the IC performs a series of tests to identify the type of device connected. Refer to the flow charts in the MAX77301 IC data sheet for more details.

## Smart Power Selector

The Smart Power Selector seamlessly distributes power between  the  external  adapter  input  (BUS),  the  battery (BAT+),  and  the  system  load  (SYS).  The  Smart  Power Selector basic functions are:

- 1) With both an external adapter and battery connected:
- a)  When the system load requirements are less than the input-current limit, the battery is charged with residual power from the input.
- b)  When  the  system  load  requirements  exceed  the input-current limit, the battery supplies supplemental current to the load.

## Table 2. Adapter Types

| ADAPTER TYPE            | OUTPUT VOLTAGE                                                     | OUTPUT CURRENT                                                                                              |
|-------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Dedicated charger       | 4.75V to 5.25V at I LOAD < 500mA; 2.0V to 5.25V for I LOAD ≥ 500mA | 500mA to 1.8A                                                                                               |
| Charger downstream port | 4.75V to 5.25V at I LOAD < 500mA; 2.0V to 5.25V for I LOAD ≥ 500mA | 500mA to 900mA for low-speed and full-speed operation; 500mA to 1.5A for low-speed and full-speed operation |
| Apple 500mA             | 4.75V to 5.25V at I LOAD < 500mA                                   | 500mA (max)                                                                                                 |
| Apple 1A                | 4.75V to 5.25V at I LOAD < 1A                                      | 1A (max)                                                                                                    |
| Apple 2A                | 4.75V to 5.25V at I LOAD < 2A                                      | 2A (max)                                                                                                    |
| Sony 500mA              | 4.75V to 5.25V at I LOAD < 500mA                                   | 500mA (max)                                                                                                 |
| Sony 500mA type B       | 4.75V to 5.25V at I LOAD < 500mA                                   | 500mA (max)                                                                                                 |
| USB 2.0 low power       | 4.25V to 5.25V                                                     | 100mA (max)                                                                                                 |
| USB 2.0 high power      | 4.75V to 5.25V                                                     | 500mA (max)                                                                                                 |

│

## Evaluates: MAX77301/MAX77301A

- 2) With the battery connected and no external power input, the system is powered from the battery.
- 3) With  an  external  power  input  connected  and  no battery, the system is powered from BUS.

If  the  junction  temperature  starts  to  get  too  hot  (110°C, typ), the charging rate is reduced. If this is insufficient to cool down the IC, the input-current limit is then reduced.

## SYS Regulation Voltage

The  IC  always  regulates  SYS  to  140mV  (typ)  above BAT+, with a minimum voltage programmable from 3.4V to 4.5V, regardless of what device is connected. The 3.4V minimum  voltage  regulation  reduces  the  ripple  on  SYS during peak load conditions where the input-current limit is tripped.

Figure 1. Smart Power Selector

<!-- image -->

## MAX77301 Evaluation Kit

## LED Indicators

## UOK Status Output

UOK is  an  open-drain  output  that  is  pulled  low  when the  BUS input  is  inserted  and  adapter-type  detection  is complete.  In  USB  suspend  mode,  the UOK pin  flashes with  a  duty  cycle  of  50%  for  a  duration  of  1.5s.  When D+/D-  open  is  detected  and  bit  nENU\_EN  =  1, UOK flashes with a duty cycle of 50% for a duration of 0.15s. UOK is  in  high  impedance  if  no  adapter  is  detected. The input UVLO/OVLO thresholds must be met prior to adapter detect and UOK pin response. The UVLO/OVLO thresholds are shown in Table 3.

## CHG\_TYPE Status Output

CHG\_TYPE  is  an  open-drain  output  that  indicates  the type and current limit of the external power supply. The pin is pulled low to indicate a 100mA USB 2.0 host with device input-current limit (ILIM) ≤ 100mA. CHG\_TYPE is high impedance when the device input-current limit (ILIM) is ≥ 500mA.

## EXT\_PWRON Output

EXT\_PWRON is  an active-low, open-drain output that is pulled low after a valid external power supply is present. If a valid power supply is not present, EXT\_PWRON is in high impedance.

## Table 3. UVLO/OVLO Thresholds

| FOR                                                | UVLO                       | OVLO                      |
|----------------------------------------------------|----------------------------|---------------------------|
| Initial BUS detection                              | 4.0V (typ) rising          | 6.9V (typ) (V BUS rising) |
| USB 2.0 low power                                  | 3.9V (typ) falling         | 6.9V (typ) (V BUS rising) |
| USB 2.0 high power, or when ILIM is not set to 111 | 4.1V (typ) falling         | 6.9V (typ) (V BUS rising) |
| Adaptive (when ILIM is set to 111)                 | V SYS + 50mV (typ) falling | 6.9V (typ) (V BUS rising) |

## Table 4. CHG\_STAT Indications

| CHARGER STATUS                                                                          | CHG_STAT BEHAVIOR                                                                       |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Charge in progress, low (continuous)                                                    | Charge in progress, low (continuous)                                                    |
| Charge suspend (due to temperature faults) pulses with 1.5s duration and 50% duty cycle | Charge suspend (due to temperature faults) pulses with 1.5s duration and 50% duty cycle |
| Charge suspend (due to temperature faults) pulses with 1.5s duration and 50% duty cycle | Charge suspend (due to temperature faults) pulses with 1.5s duration and 50% duty cycle |
| Timer fault pulses with 0.15s duration and 50% duty cycle                               | Timer fault pulses with 0.15s duration and 50% duty cycle                               |
| Charge done, high impedance                                                             | Charge done, high impedance                                                             |
| Battery removed pulses with 0.1s duration                                               | 10% to 20% duty cycle                                                                   |

│

The EXT\_PWRON output can be connected to an external  device  that  controls  power  to  external  circuits,  such as an external p-channel MOSFET. If a valid adapter is connected to  the  system  while  the  battery  is  below  the VBAT\_UVLO  threshold, EXT\_PWRON transitions  from high  impedance to  low  when  the  adapter  type  is  determined and UOK transitions from high to low impedance.

## Charge Status Output ( CHG\_STAT )

CHG\_STAT is  an  active-low,  open-drain  output  indicating state-of-battery charging. A temperature or timer fault changes  the  charge  state  of  the CHG\_STAT pin.  See Table 4 for CHG\_STAT behaviors.

## Interrupt Request Output ( IRQ )

IRQ is an active-low, open-drain output that is pulled low when an interrupt occurs. If an interrupt has occurred, the event and status information is available in the EVENT\_ and  STATUS\_ reg  isters.  Interrupts  indicate  temperature and voltages as well as charge and timer fault conditions. Events are triggered by a state change in the associated register. The event registers are reset to the default condition when read by the I 2 C interface. When the EVENT\_ registers are read in page mode, the IRQ is not released until the last bit has been read. New interrupt events are held until a complete read of all registers has occurred.

The interrupt  mask bits  located  in  register  0x07  disable the output pin, maintaining a high-impedance state.

## MAX77301 Evaluation Kit

## Thermistor Input (THM)

The  THM  input  connects  to  an  external  negative  temperature coefficient (NTC) thermistor to monitor battery or system temperature and bias resistor. The bias resistor is connected to the INT\_3V3 output pin. Charging is suspended when the thermistor temperature is out of range. The charge timers are suspended and hold their state, but no fault is indicated. When the thermistor comes back into range, charging resumes and the charge timer continues from  where  it  was  previously.  Connect  THM  to  AGND to  disable  the  thermistor  monitoring  function.  For  more details refer to the MAX77301 IC data sheet.

## JEITA Compliance

VTHM is monitored to provide battery temperature information  to  the  charge  controller.  The  JEITA  temperature profiles  shown  in  Figure  2  utilize  a  47k Ω bias  resistor between the INT\_3V3 and THM pins. The thermistor is a 100kΩ NTC-type beta of 4250K, which is connected from NTC to ground.

The IC is compliant with the JEITA specification for safe use of secondary Li+ batteries ( A Guide to the Safe Use of  Secondary  Lithium  Ion  Batteries  in  Notebook  type Personal  Computers ,  JEITA  and  Battery  Association of  Japan,  April  20,  2007).  Once  the  JEITA  parameters have  been  initialized  for  a  given  system,  no  software interaction  is  required.  The  four  temperature  thresholds change  the  battery-charger  operation  (T1-T4).  When the  thermistor  input  exceeds  the  intermediate  threshold (&lt;  T2  or  &lt;  T3),  the  end-of-charge  voltage  is  reduced. When the thermistor input exceeds the extreme temperatures (&lt; T1 or &gt; T4), the charger shuts off and all  respective charging timers are suspended. While the thermistor remains out of range, no charging occurs, and

## Evaluates: MAX77301/MAX77301A

the timer counters hold their state. When the thermistor input comes back into range, the charge timers continue to count. The middle thresholds (T2 and T3) do not shut the  charger  off,  but  have  the  capability  to  adjust  the current/voltage targets to maximize charging while reducing battery stress.

The  behavior  when  the  battery  temperature  is  between T1 and T2 is controlled by THM\_T1\_T2 and the behavior when it is between T3 and T4 is controlled by THM\_T3\_T4.

The  JEITA specification  recommends  that  systems reduce  all  loading  on  the  battery  when  the  battery temperature  exceeds  the  maximum  battery  temperature for discharge (TMD). The IC generates an interrupt and  sets  the  WHIGH\_BAT\_T\_IRQ  bit  when  the  battery temperature exceeds the T4 threshold.

If the THM disable threshold is exceeded, an interrupt is generated  and  the  BAT\_DET\_IRQ  bit  is  cleared  in  the event register.

If the thermistor functionality is not required, clearing the THERM\_EN disables temperature sensing and the thermistor input is then high impedance.

The IC is compatible with a 100k Ω thermistor with a beta of 4250K. The general relation of thermistor resistance to temperature is defined by the following equation:

<!-- formula-not-decoded -->

where  R T   is  the  resistance  in Ω of  the  thermistor  at temperature T in  Celsius,  R 25   is  the  resistance  in Ω of the thermistor at +25° C, β is the material constant of the thermistor  (typically ranges  from  3000K  to  5000K),  and T is the temperature of the thermistor in °C.

Figure 2. JEITA Battery Safety Regions

<!-- image -->

│

## Thermal Shutdown

Thermal shutdown limits total power dissipation in the IC. When the junction temperature exceeds +160°C (typ), the device turns off, allowing the IC to cool.

## External Crystal/Ceramic Resonator

XIN  and  XOUT  are  used  to  interface  to  an  external 12MHz crystal (Y1). The Y1 crystal included in the EV kit includes  internal  load  capacitors;  therefore,  C5  and  C6 are not loaded. If another crystal is selected, consult the crystal manufacturer's data sheet for load capacitances if needed. The crystal (Y1) and optional capacitors (C5, C6) can be removed for USB low-speed operation.

## External Clock

The IC accepts an external clock input at XIN. Remove the  preinstalled  crystal  (Y1,  Figure  9)  before  driving  an external clock signal to XIN. The external clock can either be a digital level square wave or sinusoidal and this can be directly coupled to XIN without the need for additional components. If the peaks of the reference clock are above VINT\_3V3   or  below  ground,  the  clock  signal  must  be driven through a DC-blocking capacitor (~33pF) connected to XIN.

The external clock source can be enabled using the UOK or  INT\_3V3  signals,  depending  on  whether  the  clock source is active-low or active-high enabled.

If  the  INT\_3V3  rail  is  used,  ensure  that  no  significant load  is  taken  from  this  output  since  this  affects  the performance  of  the  IC.  Because  the  INT\_3V3  LDO's input is sourced from V BUS , significant loading could also cause violation of the USB specifications.

## Evaluating USB Low-Speed Operation

The following EV kit modification is required for USB lowspeed operation:

- 1) Cut the PCB traces between the two half circles on jumpers JU1 and JU2.
- 2) Solder the two half circles together on jumper JU3.
- 3) Install a jumper at JU10.

## Evaluating USB Full-Speed Operation

To evaluate the USB full-speed operation, use default EV kit connections and verify the following:

- 1) PCB traces or short circuit between the two half circles on jumpers JU1 and JU2.
- 2) The two half circles at jumper JU3 are open and the JU10 jumper is removed.

The EV kit is preinstalled with the Murata CSTCE12M0G15L  crystal,  which  contains  internal  load capacitors.  Install  C5  and  C6  if  an  alternate  crystal  is desired that does not contain internal load capacitors.

## Graphic User Interface (GUI) Description

The  EV  kit  provides  an  I 2 C-compatible,  2-wire  serial interface  that  controls  the  charger  settings  as  well  as read back of adapter detection. Figure 3 shows the GUI window upon a successful connection to the EV kit and its ID information. Figure 4, Figure 5, and Figure 6 show the charger's main, control, and settings windows, while Figure  7  and  Figure  8  show  the  status  and  interrupts windows  respectively.  Refer  to  the  IC  data  sheet  for  a complete description of the registers.

Figure 3. GUI Top-Level Interface

<!-- image -->

Figure 4. Charger Main Window

<!-- image -->

Figure 5. Charger Control Window

<!-- image -->

Figure 6. Charger Settings Window

<!-- image -->

Figure 7. Status Window

<!-- image -->

Figure 8. Interrupts Window

<!-- image -->

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                  |
|--------------------|-------|----------------------------------------------------------------------------------------------|
| C1, C3             |     2 | 10µF ±10%, 16V X5R ceramic capacitors (0805) TDK C2012X5R1C106KB Taiyo Yuden EMK212BJ106KG-T |
| C2, C4, C5, C6, C8 |     0 | Not installed, capacitors                                                                    |
| C7                 |     1 | 22µF ±10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J226K                              |
| C9                 |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105K                               |
| D1-D5              |     5 | Red LEDs OSRAM LS L296-P2Q2-1-Z                                                              |
| D6                 |     1 | 5.6V zener diode Micro Commercial Components MMXZ5232B-TP                                    |
| J1                 |     1 | 20-pin (2 x 10) right-angle receptacle Samtec SSW-110-02-S-D-RA                              |
| JU1, JU2, JU3, JU5 |     0 | Not installed, 2-pin jumpers JU1, JU2, and JU5 are short (PCB trace); JU3 is open            |
| JU4                |     1 | 4-pin header Digi-Key S1012E-36-ND                                                           |
| JU6-JU9            |     4 | 3-pin headers Digi-Key S1012E-36-ND                                                          |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEB                          |
|----------------------------------------|--------------|------------------------------|
| Hirose Electric USA, Inc.              | 805-522-7958 | www.hiroseusa.com            |
| Micro Commercial Components Corp.      | 818-701-4933 | www.mccsemi.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata- northamerica.com |
| OSRAM AG                               | 978-777-1900 | www.osram.com                |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com        |
| Vishay                                 | 402-563-6866 | www.vishay.com               |

Note: Indicate that you are using the MAX77301 when contacting these component suppliers.

| DESIGNATION          |   QTY | DESCRIPTION                                                                                                  |
|----------------------|-------|--------------------------------------------------------------------------------------------------------------|
| JU10                 |     1 | 2-pin header Digi-Key S1012E-36-ND                                                                           |
| P1                   |     1 | Micro-B USB receptacle Hirose H11635CT-ND or ZX62-AB-5PA(11)                                                 |
| R1, R2               |     2 | 33.2Ω ±1% resistors (0402)                                                                                   |
| R3, R4, R5, R11, R12 |     5 | 270Ω ±5% resistors (0402)                                                                                    |
| R6, R7               |     0 | Not installed, resistors                                                                                     |
| R8                   |     1 | 100kΩ NTC thermistor (β = 4250) Murata NCP15WF104F03RC                                                       |
| R9, R10              |     2 | 2.21kΩ ±1% resistors (0402)                                                                                  |
| R13-R16, R19         |     5 | 10kΩ ±1% resistors (0402)                                                                                    |
| R17                  |     1 | 47kΩ ±1% resistor (0402)                                                                                     |
| R18                  |     1 | 1kΩ ±1% resistor (0402)                                                                                      |
| U1                   |     1 | Dual-path Li+ charger with USB enumeration (25 WLP) Maxim MAX77301EWA+T                                      |
| Y1                   |     1 | 12MHz ±2500ppm crystal Murata CSTCE12M0G15L                                                                  |
| -                    |     1 | USBA-to-Micro-B cable, 3ft (1m) Hirose ZX64-B-5S-1000-STDA Digi-Key H11609-ND or WM17145-ND Molex 68784-0001 |
| -                    |     1 | PCB: MAX77301EVKIT#                                                                                          |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77301EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX77301 EV Kit Schematic

Figure 9. MAX77301 EV Kit Schematic

<!-- image -->

│

## MAX77301 EV Kit PCB Layouts

<!-- image -->

Figure 10. MAX77301 EV Kit Component Placement GuideComponent Side

Figure 11. MAX77301 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 12. MAX77301 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## MAX77301 EV Kit PCB Layouts (continued)

<!-- image -->

Figure 13. MAX77301 EV Kit PCB Layout-Inner Layer 3

Figure 14. MAX77301 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 15. MAX77301 EV Kit Component Placement GuideSolder Side

<!-- image -->

## MAX77301 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 2/17            | Initial release          | -               |
|                 1 | 4/21            | Added MAX77301A to title | All             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77301/MAX77301A