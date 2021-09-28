create database HeThongGuiXeBenhVienX
use HeThongGuiXeBenhVienX
create table tblKhuVuc(
	maKhuVuc int not null identity(1,1),
	tenKhuVuc nvarchar(255),
	soLuongToiDa int not null,
	soLuongHienTai int not null,
	CONSTRAINT  PK_tblKhuVuc primary key (maKhuVuc),
)
create table tblVaiTro(
	maVaiTro int not null identity(1,1),
	tenVaiTro nvarchar(255),
	CONSTRAINT  PK_tblVaiTro primary key (maVaiTro),
)
create table tblThe(
	maThe int not null identity(1,1),
	maKhuVuc int not null,
	tinhTrang bit,
	CONSTRAINT  PK_tblThe primary key (maThe),
	CONSTRAINT  FK_tblThe_tblKhuVuc foreign key (maKhuVuc) references tblKhuVuc(maKhuVuc)
) 
create table tblNhanVien(
	maNhanVien int not null identity(1,1),
	ten nvarchar(255) not null,
	tuoi int not null,
	sdt nvarchar(255) not null,
	maVaiTro int,
	CONSTRAINT  PK_tblNhanVien primary key (maNhanVien),
	CONSTRAINT  FK_tblNhanVien_tblVaiTro foreign key (maVaiTro) references tblVaiTro(maVaiTro)
)
create table tblGia(
	maGia int primary key(maGia) identity(1,1),
	loaiGui int,
	giaTien int
)
create table tblVeThe(
	maThe int not null,
	bienSo nvarchar(255) not null,
	mauXe nvarchar(255) not null,
	loaiXe nvarchar(255) not null,
	thoiGianBatDau datetime not null,
	thoiGianKetThuc datetime not null,
	maNhanVien int,
	maGia int,
	CONSTRAINT  PK_tblVeThe primary key (maThe,bienSo,thoiGianBatDau),
	CONSTRAINT  FK_tblVeThe_tblThe foreign key (maThe) references tblThe(maThe),
	CONSTRAINT  FK_tblVeThe_tblGia foreign key (maGia) references tblGia(maGia),
	CONSTRAINT  FK_tblVeThe_tblNhanVien foreign key (maNhanVien) references tblNhanVien(maNhanVien)
)

create table tblTaiKhoan(
	maTaiKhoan int not null identity(1,1),
	maNhanVien int not null,
	taiKhoan varchar(255) not null,
	matKhau varchar(255) not null,
	CONSTRAINT  FK_tblTaiKhoan_tblNhanVien foreign key (maNhanVien) references tblNhanVien(maNhanVien)
)
-- thêm dữ liệu vai trò
insert into tblVaiTro values('admin'); -- quản lý
insert into tblVaiTro values('user'); -- nhân viên thường
insert into tblVaiTro values('audit'); -- nhân viên kiểm toán
-- thêm dữ liệu nhân viên
insert into tblNhanVien values(N'Nguyễn Đình Phong',21,'0352337342',1);
insert into tblNhanVien values(N'Phạm Minh Hằng',21,'0352333213',2);
insert into tblNhanVien values(N'Nguyễn Thị Hằng',21,'0352337222',3);
-- thêm dữ liệu tài khoản

insert into tblTaiKhoan values(1,'dinhphong','123');
insert into tblTaiKhoan values(2,'minhhang','123');
insert into tblTaiKhoan values(3,'thihang','123');

-- thêm dữ liệu giá
insert into tblGia values(1,5000);
insert into tblGia values(3,12000);
insert into tblGia values(7,25000);
insert into tblGia values(30,10000);
-- thêm dữ liệu khu vực
insert into tblKhuVuc values(N'A',10,0);
insert into tblKhuVuc values(N'B',10,0);
insert into tblKhuVuc values(N'C',10,0);
insert into tblKhuVuc values(N'D',10,0);
insert into tblKhuVuc values(N'E',10,0);
insert into tblKhuVuc values(N'F',10,0);
--thêm dữ liệu thẻ khu vực A
insert into tblThe values(1,0);
insert into tblThe values(1,0);
insert into tblThe values(1,0);
insert into tblThe values(1,0);
-- thêm dữ liệu thẻ khu vực B
insert into tblThe values(2,0);
insert into tblThe values(2,0);
insert into tblThe values(2,0);
insert into tblThe values(2,0);
-- thêm dữ liệu thẻ khu vực C
insert into tblThe values(3,0);
insert into tblThe values(3,0);
insert into tblThe values(3,0);
insert into tblThe values(3,0);
-- thêm dữ liệu thẻ khu vực D
insert into tblThe values(4,0);
insert into tblThe values(4,0);
insert into tblThe values(4,0);
insert into tblThe values(4,0);

go

create proc sp_them_vethe @mathe int,@bienso nvarchar(255),@mauxe nvarchar(255),@loaixe nvarchar(255),@thoigianbatdau datetime,@thoigianketthuc datetime,@manhanvien int,@magia int
as
	begin
		declare @trangthai bit
		set @trangthai = (select tinhTrang from tblThe where maThe = @mathe)
		if @trangthai = 0
			begin
				insert into tblVeThe values(@mathe,@bienso,@mauxe,@loaixe,@thoigianbatdau,@thoigianketthuc,@manhanvien,@magia)
				update tblThe
				set tinhTrang = 1
				where maThe=@mathe
			end
		else
			print 'the da duoc su dung'	
end
exec sp_them_vethe 6,'29T1-095312',N'đen',N'lead','2021-09-27 00:00:00.000','2021-09-27 10:00:00.000',2,2
-- store sửa ve thẻ
go
create proc sp_sua_vethe @mathe int,@bienso nvarchar(255),@mauxe nvarchar(255),@loaixe nvarchar(255),@manhanvien int,@magia int
as
	begin
		update tblVeThe
		set bienSo=@bienso,mauXe=@mauxe,loaiXe=@loaixe,maNhanVien=@manhanvien,maGia=@magia
		where maThe=@mathe
end
exec sp_sua_vethe 5,'29T1-657399',N'đen',N'SH',2,2
-- store kiem tra vé
go
create proc sp_kiemtra_ve @mathe int,@bienso nvarchar(255),@mauxe nvarchar(255),@loaixe nvarchar(255)
as 
begin
	select * from tblVeThe 
		where bienSo=@bienso and maThe= @mathe and mauXe=@mauxe and loaiXe=@loaixe
end
go
-- store thu vé
create proc sp_thu_ve @mathe int,@bienso nvarchar(255),@mauxe nvarchar(255),@loaixe nvarchar(255),@thoigianketthuc datetime
as
	begin
		update tblVeThe
		set thoiGianKetThuc=@thoigianketthuc
		where maThe=@mathe and bienSo=@bienso and mauXe=@mauxe and loaiXe=@loaixe
		update tblThe
		set tinhTrang = 0
		where maThe=@mathe
end
-- store thêm nhân viên
go 
create proc sp_them_nhanvien @ten nvarchar(255),@tuoi int,@sdt nvarchar(255),@mavaitro int
as
	begin
		insert into tblNhanVien values(@ten,@tuoi,@sdt,@mavaitro)
end
-- store thêm khu vực
go 
create proc sp_them_khuvuc @tenkhuvuc nvarchar(255),@soluongtoida int,@soluonghientai int
as
	begin
		insert into tblKhuVuc values(@tenkhuvuc,@soluongtoida,@soluonghientai)
end
-- store thêm thẻ
go 
create proc sp_them_the @makhuvuc int
as
	begin
		insert into tblThe values(@makhuvuc,0)
end
-- store thêm giá
go 
 create proc sp_them_gia @loaigui int,@giatien int
as
	begin
		insert into tblGia values(@loaigui,@giatien)
end

--store đăng nhập
go
create proc sp_dangnhap @taikhoan varchar(255),@matkhau varchar(255)
as
begin
	declare @tontai  int;
	set @tontai = (select top 1 maTaiKhoan from tblTaiKhoan 
	where taiKhoan=@taikhoan and matKhau=@matkhau)
	if @tontai != ''
		select * from tblNhanVien 
		where maNhanVien=@tontai
	else
		print 'not found'
end
exec sp_dangnhap 'dinhphong','123'
--store thêm tài khoản
go
create proc sp_them_taikhoan @taikhoan varchar(255),@matkhau varchar(255),@manhanvien int
as
begin
	declare @tontai int
	set @tontai = (select count(maTaiKhoan) from tblTaiKhoan where taiKhoan=@taikhoan)
	if @tontai = 0
		begin
			insert into tblTaiKhoan values(@manhanvien,@taikhoan,@matkhau)
		end
	else
		print N'Tên tài khoản đã được sử dụng'
end

-- trigger update soluonghientai khi them, cap nhat vethe
go
--drop trigger tr_soluonghientai_khuvuc_vethe
create trigger tr_soluonghientai_khuvuc_them_vethe on tblVeThe
for insert
as
	begin
		declare @khuvuc int
		set @khuvuc = (select a.maKhuVuc from tblThe a, inserted b where b.maThe=a.maThe)
		update tblKhuVuc
		set soLuongHienTai = (select count(maThe) from tblThe where tinhTrang=1 and maKhuVuc= @khuvuc)+1
		where maKhuVuc= @khuvuc
	end
go 
create trigger tr_soluonghientai_khuvuc_sua_vethe on tblVeThe
for update
as
	begin
		declare @khuvuc int
		set @khuvuc = (select a.maKhuVuc from tblThe a, inserted b where b.maThe=a.maThe)
		update tblKhuVuc
		set soLuongHienTai = (select count(maThe) from tblThe where tinhTrang=1 and maKhuVuc= @khuvuc)
		where maKhuVuc= @khuvuc
	end
go 